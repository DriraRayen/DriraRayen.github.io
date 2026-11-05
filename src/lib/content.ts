import skills from "@/content/skills.json";
import certificates from "@/content/certificates.json";
import projects from "@/content/projects.json";
import timeline from "@/content/timeline.json";
import education from "@/content/education.json";

export type SkillCategory = (typeof skills)[number];
export type Certificate = (typeof certificates)[number] & { imageUrl: string };
export type Project = (typeof projects)[number];
export type TimelineEvent = (typeof timeline)[number];
export type Education = (typeof education)[number];

const certificateImages = import.meta.glob<{ default: string }>(
  "@/assets/certificates/*.{jpg,jpeg,png,webp}",
  { eager: true }
);

export const skillCategories = skills;
export const projectItems = projects;
export const timelineEvents = timeline;
export const educationItems = education;

export const certificateItems: Certificate[] = certificates.map((certificate) => {
  const imagePath = Object.keys(certificateImages).find((path) =>
    path.endsWith(`/${certificate.image}`)
  );
  if (!imagePath) {
    throw new Error(`Certificate image not found: ${certificate.image}`);
  }
  return { ...certificate, imageUrl: certificateImages[imagePath].default };
});
