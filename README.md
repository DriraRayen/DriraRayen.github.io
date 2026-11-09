# Rayen Drira - Portfolio Website

[![Live Site](https://img.shields.io/badge/Live-rayendrira.me-gold?style=for-the-badge)](https://rayendrira.me)
[![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)

> A mystical, Elden Ring-inspired portfolio showcasing my journey as a computer engineering student, a Cybersecurity enthusiast, and a Scout leader.

🌐 **Live Site:** [rayendrira.me](http://rayendrira.me)

---

## ✨ Features

-  🎨 **Elden Ring Theme** - Immersive dark fantasy design with golden accents
-  📱 **Fully Responsive** - Optimized for all devices
-  ⚡ **Fast & Modern** - Built with React + TypeScript + Vite
-  🎭 **Interactive UI** - Smooth animations and transitions
-  🖼️ **Scouts Gallery** - 102+ photos showcasing scouting activities
-  🏆 **Achievements & Certifications** - Interactive display of credentials
-  📊 **Timeline Section** - CTF competitions, hackathons, and events
-  🎮 **Easter Eggs** - Hidden Elden Ring lore and character stats

---

## 🛠️ Technologies Used

### Core

-  **React 18** - UI library
-  **TypeScript** - Type-safe development
-  **Vite** - Lightning-fast build tool
-  **React Router** - Client-side routing

### Styling & UI

-  **Tailwind CSS** - Utility-first styling
-  **Radix UI** - Accessible component primitives
-  **Lucide React** - Beautiful icons
-  **Custom Fonts** - Cinzel & EB Garamond

### Tools & Deployment

-  **ESLint** - Code quality
-  **PostCSS** - CSS processing
-  **gh-pages** - GitHub Pages deployment

---

## 📁 Project Structure

```
DriraRayen.github.io/
├── public/              # Static assets
│   ├── 404.html        # Custom 404 page
│   ├── robots.txt      # SEO configuration
│   └── logo.svg        # Site favicon
├── src/
│   ├── assets/         # Images and media
│   │   ├── scout/      # Scout leadership photos
│   │   ├── gallery/    # Event photos (hackathons, CTFs)
│   │   └── certificates/ # Achievement badges
│   ├── components/
│   │   ├── portfolio/  # Main portfolio sections
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── ProjectsSection.tsx
│   │   │   ├── SkillsSection.tsx
│   │   │   ├── ScoutSection.tsx
│   │   │   ├── CertificatesSection.tsx
│   │   │   ├── TimelineSection.tsx
│   │   │   ├── ContactSection.tsx
│   │   │   └── EldenRingSection.tsx   # Easter egg modal
│   │   └── ui/         # Reusable UI components (Radix)
│   ├── pages/          # Route pages
│   ├── hooks/          # Custom React hooks
│   └── lib/            # Utilities
├── index.html          # Entry point
├── vite.config.ts      # Vite configuration
├── tailwind.config.ts  # Tailwind configuration
└── package.json        # Dependencies
```

---

## Prerequisites

-  Node.js 18+
-  npm or yarn

## Local content dashboard

Run `npm run admin`, then open `http://127.0.0.1:4173` in your browser. The
dashboard edits the JSON files in `src/content/` and uploads images into the
existing certificate or gallery asset folders. It is intentionally local-only
and is never included in the public GitHub Pages build.

After saving changes, preview and deploy the site as usual:

```bash
npm run build
npm run deploy
```

### Automatic deployment

The repository also includes a GitHub Actions workflow at
`.github/workflows/deploy-pages.yml`. After pushing changes to the `main`
branch with GitHub Desktop, GitHub automatically builds and deploys the site.
In the repository settings, go to **Pages** and set the source to **GitHub
Actions**. Once enabled, local `npm run deploy` is no longer needed.

The editable content sections are `skills.json`, `certificates.json`,
`projects.json`, `timeline.json`, and `education.json`.
Internships are editable in `internships.json`. IEEE activity photos are
uploaded through the dashboard using the IEEE upload type and a year folder,
for example `2026`.

Dashboard saves validate the content structure and create a timestamped
`.bak` copy before replacing a JSON file. Invalid certificate references,
unsupported project/timeline icons, malformed entries, and non-year IEEE
folders are rejected.

---

## 📦 Key Sections

### 🏠 Hero Section

The landing page welcomes visitors with an immersive Elden Ring-inspired design, featuring animated parallax effects, mystical floating runes, and a dramatic profile introduction that sets the tone for the entire portfolio experience.

### 👤 About Me

A comprehensive introduction to my personal journey, academic background at ISITCom, language proficiencies (Arabic, French, English), and my passion for IoT, cybersecurity, and scout leadership that has shaped who I am today.

### 💼 Projects

A showcase of my most significant development work, including full-stack web applications, health tracking systems, and innovative communication tools, each demonstrating different aspects of my technical skillset and problem-solving abilities.

### 🛡️ Skills

An interactive display of my technical expertise organized by categories: programming languages, web frameworks, database technologies, embedded systems hardware, and security tools, with hover effects revealing proficiency levels.

### 🏕️ Scout Leadership

A dedicated gallery featuring 102 carefully curated photos from 2018-2024, documenting my journey as a scout leader. Includes an auto-playing slideshow, year-based filtering, and an immersive lightbox viewer with full keyboard navigation support.

### 🏆 Certifications

An elegant presentation of professional certifications and achievements from industry-leading organizations including FORTINET, NVIDIA, and CISCO, showcasing my commitment to continuous learning in cybersecurity, AI, and networking.

### 📅 Timeline

A chronological visual journey through my recent competitive experiences, including hackathons, CTF competitions, and coding marathons, with detailed descriptions, photos, and achievements for each event.

---

## 🎨 Design Philosophy

The portfolio draws inspiration from **Elden Ring**, featuring:

-  **Golden color scheme** (`#DAA520`) representing the Elden Ring
-  **Cinzel font** for titles (medieval fantasy aesthetic)
-  **EB Garamond** for body text (elegant readability)
-  **Mystical effects** - Floating runes, fog overlays, parallax scrolling
-  **Custom cursor** - Themed pointer
-  **Easter eggs** - Character stats modal, Elden Ring lore

---

## 🌐 Custom Domain

This site is hosted on **GitHub Pages** with a custom domain:

-  **Domain:** [rayendrira.me](https://rayendrira.me)
-  **DNS:** Configured via CNAME file
-  **SSL:** Enforced HTTPS

---

## 📊 Performance

-  ⚡ **Lighthouse Score:** 95+ Performance
-  📦 **Bundle Size:** ~430KB JS + ~102KB CSS (gzipped)
-  🖼️ **Image Optimization:** All assets optimized for web
-  🚀 **Load Time:** < 2s on 3G networks

---

## 📧 Contact

**Rayen Drira**

-  📧 Email: rayen.drira@outlook.com
-  💼 LinkedIn: [linkedin.com/in/DriraRayen](https://linkedin.com/in/DriraRayen)
-  🐙 GitHub: [github.com/DriraRayen](https://github.com/DriraRayen)
-  🌐 Website: [rayendrira.me](http://rayendrira.me)

---

## 🎮 Easter Eggs

Try finding these hidden features:

-  Click on "Inspired by the Lands Between" in the footer
-  Click on "Tarnished One's Legacy" to view character stats

---

## 📝 Version History

### v2.0.0 (Current - December 2025)

-  Complete redesign with Elden Ring theme
-  Added Scout Leadership section with 102 photos
-  Integrated Timeline section for events
-  React + TypeScript + Vite stack
-  Full responsive design

### v1.0.0 (Legacy)

-  Static HTML/CSS portfolio
-  Basic project showcase
-  [View legacy version](http://rayendrira.me/rayen-portfolio/)

---

<div align="center">

**May your journey through the Lands Between be filled with discovery! ⚔️✨**

_Arise, Ye Tarnished!_

</div>
