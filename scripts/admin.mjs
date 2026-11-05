import { createServer } from "node:http";
import { promises as fs, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const contentDir = path.join(root, "src", "content");
const assetDirs = {
  certificates: path.join(root, "src", "assets", "certificates"),
  gallery: path.join(root, "src", "assets", "gallery"),
};
const datasets = ["skills", "certificates", "projects", "timeline", "education", "internships"];
const projectIcons = new Set(["Filter", "ShoppingCart", "Brain", "HeartPulse", "MessageSquare", "Lock"]);
const timelineIcons = new Set(["Calendar", "Briefcase", "GraduationCap", "Trophy", "Users", "Palette", "Flag"]);

const page = `<!doctype html>
<html><head><meta charset="utf-8"><title>Portfolio Content Dashboard</title>
<style>
body{font:16px system-ui;max-width:1000px;margin:40px auto;padding:0 20px;background:#17130d;color:#f5d77b}
textarea{width:100%;min-height:520px;background:#211b12;color:#fff4c4;border:1px solid #9a792b;border-radius:6px;padding:12px;font:14px monospace}
button,select,input{padding:10px;margin:6px 6px 12px 0;border-radius:5px;border:1px solid #9a792b;background:#2c2314;color:#fff4c4}
button{cursor:pointer;background:#9a792b;color:#17130d;font-weight:bold}.hint{color:#c7b98e}#status{margin:12px 0}
</style></head><body>
<h1>Portfolio Content Dashboard</h1>
<p class="hint">This dashboard is local-only. Edit JSON content, save it, then run <code>npm run build</code> and <code>npm run deploy</code>.</p>
<label>Content section <select id="dataset">${datasets.map((name) => `<option>${name}</option>`).join("")}</select></label>
<textarea id="editor" spellcheck="false"></textarea><br><button id="save">Save JSON</button>
<hr><h2>Upload an image</h2>
<p class="hint">Certificate images go into the certificate folder. Gallery images can use an event folder name such as <code>nuit-2026</code>.</p>
<select id="uploadType"><option value="gallery">General gallery</option><option value="ieee">IEEE activities</option><option value="certificates">Certificate</option></select><input id="upload" type="file" accept="image/*"><input id="folder" placeholder="Event or year folder (optional)"><button id="uploadButton">Upload image</button>
<div id="status"></div>
<script>
const dataset=document.querySelector('#dataset'), editor=document.querySelector('#editor'), status=document.querySelector('#status');
async function load(){const res=await fetch('/api/content/'+dataset.value);editor.value=JSON.stringify(await res.json(),null,2)}
dataset.onchange=load;
document.querySelector('#save').onclick=async()=>{try{const data=JSON.parse(editor.value);const res=await fetch('/api/content/'+dataset.value,{method:'PUT',headers:{'content-type':'application/json'},body:JSON.stringify(data)});status.textContent=res.ok?'Saved successfully.':'Save failed: '+await res.text()}catch(error){status.textContent='Invalid JSON: '+error.message}};
document.querySelector('#uploadButton').onclick=async()=>{const file=document.querySelector('#upload').files[0];if(!file){status.textContent='Choose an image first.';return}const body=await file.arrayBuffer();const type=document.querySelector('#uploadType').value;const folderName=document.querySelector('#folder').value||'general';const folder=type==='certificates'?'certificates':(type+'/'+folderName);const res=await fetch('/api/upload?folder='+encodeURIComponent(folder)+'&name='+encodeURIComponent(file.name),{method:'POST',body});status.textContent=res.ok?'Image uploaded successfully.':'Upload failed: '+await res.text()};
load();
</script></body></html>`;

function jsonResponse(response, status, data) {
  response.writeHead(status, { "content-type": "application/json" });
  response.end(JSON.stringify(data));
}

function requireStrings(item, fields, label) {
  if (!item || typeof item !== "object" || fields.some((field) => typeof item[field] !== "string" || !item[field].trim())) {
    throw new Error(`${label} contains an item with missing text fields.`);
  }
}

function validateContent(dataset, value) {
  if (!Array.isArray(value)) throw new Error(`${dataset} must be a JSON array.`);
  value.forEach((item, index) => {
    const label = `${dataset}[${index}]`;
    if (dataset === "skills") {
      requireStrings(item, ["title", "rune", "description"], label);
      if (!Array.isArray(item.skills) || item.skills.some((skill) => typeof skill !== "string")) throw new Error(`${label}.skills must be an array of strings.`);
    } else if (dataset === "certificates") {
      requireStrings(item, ["image", "title", "issuer", "date", "description"], label);
      if (!/^[\w .-]+\.(jpe?g|png|gif|webp)$/i.test(item.image) || !existsSync(path.join(assetDirs.certificates, item.image))) throw new Error(`${label}.image must reference an existing certificate image.`);
      if (!Array.isArray(item.skills) || item.skills.some((skill) => typeof skill !== "string")) throw new Error(`${label}.skills must be an array of strings.`);
    } else if (dataset === "projects") {
      requireStrings(item, ["icon", "title", "description", "year", "category"], label);
      if (!projectIcons.has(item.icon) || !Array.isArray(item.technologies) || item.technologies.some((tech) => typeof tech !== "string")) throw new Error(`${label} has an invalid icon or technologies list.`);
    } else if (dataset === "timeline") {
      requireStrings(item, ["year", "title", "type", "icon", "description", "eventKey"], label);
      if (!timelineIcons.has(item.icon)) throw new Error(`${label}.icon is not supported.`);
      if (!Array.isArray(item.details) || item.details.some((detail) => typeof detail !== "string")) throw new Error(`${label}.details must be an array of strings.`);
    } else if (dataset === "education") {
      requireStrings(item, ["title", "institution", "location", "status", "period", "description"], label);
      if (!Array.isArray(item.tags) || item.tags.some((tag) => typeof tag !== "string")) throw new Error(`${label}.tags must be an array of strings.`);
    } else if (dataset === "internships") {
      requireStrings(item, ["title", "company", "period", "location", "description"], label);
      if (!Array.isArray(item.skills) || item.skills.some((skill) => typeof skill !== "string")) throw new Error(`${label}.skills must be an array of strings.`);
    }
  });
}

const server = createServer(async (request, response) => {
  try {
    const url = new URL(request.url, "http://localhost");
    if (request.method === "GET" && url.pathname === "/") {
      response.writeHead(200, { "content-type": "text/html; charset=utf-8" });
      response.end(page);
      return;
    }
    const match = url.pathname.match(/^\/api\/content\/([a-z]+)$/);
    if (match && datasets.includes(match[1])) {
      const file = path.join(contentDir, `${match[1]}.json`);
      if (request.method === "GET") {
        jsonResponse(response, 200, JSON.parse(await fs.readFile(file, "utf8")));
        return;
      }
      if (request.method === "PUT") {
        let body = "";
        for await (const chunk of request) body += chunk;
        const parsed = JSON.parse(body);
        validateContent(match[1], parsed);
        await fs.copyFile(file, `${file}.${Date.now()}.bak`);
        await fs.writeFile(file, `${JSON.stringify(parsed, null, 2)}\n`, "utf8");
        jsonResponse(response, 200, { ok: true });
        return;
      }
    }
    if (request.method === "POST" && url.pathname === "/api/upload") {
      const folder = url.searchParams.get("folder") || "";
      const name = path.basename(url.searchParams.get("name") || "");
      if (folder.startsWith("ieee/") && !/^ieee\/\d{4}$/.test(folder)) {
        jsonResponse(response, 400, { error: "IEEE uploads must use a four-digit year folder." });
        return;
      }
      if (!/^(gallery|ieee)\/[-\w]+$/.test(folder) && folder !== "certificates") {
        jsonResponse(response, 400, { error: "Invalid asset folder." });
        return;
      }
      if (!name || !/^[-\\w. ]+$/.test(name) || !/\\.(jpe?g|png|gif|webp)$/i.test(name)) {
        jsonResponse(response, 400, { error: "Only safe image filenames are allowed." });
        return;
      }
      const destination = path.resolve(root, "src", "assets", folder, name);
      if (!destination.startsWith(path.resolve(root, "src", "assets") + path.sep)) {
        jsonResponse(response, 400, { error: "Invalid upload path." });
        return;
      }
      await fs.mkdir(path.dirname(destination), { recursive: true });
      const chunks = [];
      for await (const chunk of request) chunks.push(chunk);
      await fs.writeFile(destination, Buffer.concat(chunks));
      jsonResponse(response, 200, { ok: true, file: destination });
      return;
    }
    response.writeHead(404);
    response.end("Not found");
  } catch (error) {
    jsonResponse(response, 400, { error: error.message });
  }
});

server.listen(4173, "127.0.0.1", () => {
  console.log("Portfolio dashboard running at http://127.0.0.1:4173");
});
