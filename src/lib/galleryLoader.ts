// Dynamically load all images from gallery event folders
// This uses Vite's import.meta.glob to automatically detect and load images

export interface GalleryImage {
   src: string;
   title: string;
   description: string;
   category: string;
   event: string;
}

interface EventConfig {
   title: string;
   description: string;
   category: string;
}

// Event metadata - Add new events here with their display information
const eventConfigs: Record<string, EventConfig> = {
   scouts: {
      title: "Scouts Leadership Gathering",
      description: "Leading fellow scouts through ancient wisdom",
      category: "Leadership",
   },
   "iot-workshop": {
      title: "IoT Workshop",
      description: "Forging connections between circuits and souls",
      category: "Technology",
   },
   hackathon: {
      title: "Hackathon Victory",
      description: "Conquering challenges in the realm of code",
      category: "Competition",
   },
   "team-project": {
      title: "Team Collaboration",
      description: "United in purpose, bound by craft",
      category: "Projects",
   },
   nuit: {
      title: "Nuit",
      description: "Legendary gatherings under the stars",
      category: "Event",
   },
   "nuit-2025": {
      title: "Nuit 2025",
      description: "A night to remember in the chronicles",
      category: "Event",
   },
   "nuit-2024": {
      title: "Nuit 2024",
      description: "Where legends were born",
      category: "Event",
   },
   raksha: {
      title: "Raksha Gathering",
      description: "Bonds forged in fellowship and purpose",
      category: "Community",
   },
   redroom: {
      title: "Red Room Chronicles",
      description: "Ventures into the crimson realm",
      category: "Adventure",
   },
   KYBS: {
      title: "Kyubisec Online CTF",
      description: "the first capture the flag event by Kyubisec",
      category: "Event",
   },
};

/**
 * Loads all gallery images from event folders automatically
 * Any image added to src/assets/gallery/{event-name}/ will be automatically detected
 */
export async function loadGalleryImages(): Promise<GalleryImage[]> {
   // Use Vite's import.meta.glob to find all images in gallery subdirectories
   const imageModules = import.meta.glob<{ default: string }>(
      "@/assets/gallery/**/*.{jpg,jpeg,png,gif,webp}",
      { eager: true }
   );

   const images: GalleryImage[] = [];

   // Process each image
   for (const [path, module] of Object.entries(imageModules)) {
      // Extract event name from path: /src/assets/gallery/event-name/image.jpg
      const pathParts = path.split("/");
      const fileName = pathParts[pathParts.length - 1]; // Get the file name
      const eventName = pathParts[pathParts.length - 2]; // Get the folder name

      // Check if this is a sub-folder event (e.g., nuit/2025)
      const parentFolder = pathParts[pathParts.length - 3];
      const isSubFolder = parentFolder !== "gallery";

      // For sub-folder events like nuit/2025, combine them: "nuit-2025"
      const combinedEventName = isSubFolder
         ? `${parentFolder}-${eventName}`
         : eventName;

      // Skip if image is directly in gallery root (not in an event folder)
      if (eventName === "gallery") {
         continue;
      }

      // Get event configuration or use defaults
      const config = eventConfigs[combinedEventName] ||
         eventConfigs[eventName] || {
            title: formatEventName(combinedEventName),
            description: `Moments captured from ${formatEventName(
               combinedEventName
            )}`,
            category: "Event",
         };

      images.push({
         src: module.default,
         title: config.title,
         description: config.description,
         category: config.category,
         event: combinedEventName,
      });
   }

   return images;
}

/**
 * Formats event folder name into readable title
 * Example: "team-project" -> "Team Project"
 */
function formatEventName(eventName: string): string {
   return eventName
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
}

/**
 * Gets all unique event names from loaded images
 */
export function getEventNames(images: GalleryImage[]): string[] {
   const events = new Set(images.map((img) => img.event));
   return Array.from(events).sort();
}

/**
 * Filters images by event name
 */
export function filterImagesByEvent(
   images: GalleryImage[],
   eventName: string
): GalleryImage[] {
   return images.filter((img) => img.event === eventName);
}
