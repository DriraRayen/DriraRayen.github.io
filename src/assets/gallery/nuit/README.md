# Nuit Events Gallery

This folder contains photos from different editions of the Nuit event, organized by year.

## Structure

```
nuit/
├── 2025/          # Nuit 2025 edition photos
├── 2024/          # Nuit 2024 edition photos (add photos here)
└── README.md      # This file
```

## How to Add Photos for a New Edition

1. Create a new folder with the year name (e.g., `2026`)
2. Add your photos to that folder
3. Update the event configuration in `src/lib/galleryLoader.ts`:

```typescript
"nuit-2026": {
  title: "Nuit 2026",
  description: "Your description here",
  category: "Event",
},
```

That's it! The photos will automatically appear on the website.

## Supported Formats

-  JPG/JPEG
-  PNG
-  GIF
-  WebP
