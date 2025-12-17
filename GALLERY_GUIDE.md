# Gallery Auto-Loading System

This gallery automatically detects and displays images organized by events.

## How to Add New Photos

1. **Navigate to the gallery folder:**

   ```
   src/assets/gallery/
   ```

2. **Create or use an existing event folder:**

   -  Existing events: `scouts`, `iot-workshop`, `hackathon`, `team-project`, `nuit`, `raksha`, `redroom`
   -  To create a new event, just create a new folder with a descriptive name (use lowercase and hyphens)
   -  For events with multiple editions (like Nuit), create sub-folders by year: `nuit/2025/`, `nuit/2024/`

3. **Add your photos:**

   -  Simply paste your images (`.jpg`, `.jpeg`, `.png`, `.gif`, `.webp`) into the event folder
   -  Example: `src/assets/gallery/hackathon/my-new-photo.jpg`
   -  For year-based events: `src/assets/gallery/nuit/2025/photo.jpg`

4. **That's it!**
   -  Your images will automatically appear on the website
   -  No code changes needed
   -  The build system will detect them automatically

## Customize Event Display Names

To customize how an event appears on the website (title, description, category), edit the `eventConfigs` object in:

```
src/lib/galleryLoader.ts
```

### Example:

```typescript
const eventConfigs: Record<string, EventConfig> = {
   "my-event": {
      title: "My Amazing Event",
      description: "A memorable gathering of champions",
      category: "Community",
   },
   // Add more events here...
};
```

### If you don't add configuration:

-  The folder name will be auto-formatted as the title
-  Example: `team-project` → "Team Project"
-  Default category will be "Event"

## Folder Structure

```
src/assets/gallery/
├── scouts/
│   └── scouts-event-1.jpg
├── iot-workshop/
│   └── iot-workshop.jpg
├── hackathon/
│   └── hackathon.jpg
├── team-project/
│   └── team-project.jpg
├── nuit/
│   ├── 2025/
│   │   ├── Nuit_2025_1.jpg
│   │   ├── Nuit_2025_2.png
│   │   └── night1.jpg
│   └── 2024/
│       └── (add 2024 photos here)
├── raksha/
│   ├── raksha-1.jpg
│   └── raksha-2.jpg
└── redroom/
    ├── REDROOM-1.jpg
    ├── REDROOM-2.jpg
    └── REDROOM-3.jpg
```

## Supported Image Formats

-  JPG/JPEG
-  PNG
-  GIF
-  WebP

## Technical Details

The system uses Vite's `import.meta.glob` to automatically discover and bundle all images from the gallery folders during build time. This means:

-  ✅ Images are optimized and bundled automatically
-  ✅ No manual imports needed
-  ✅ Hot reload works in development
-  ✅ Production builds are fully optimized
