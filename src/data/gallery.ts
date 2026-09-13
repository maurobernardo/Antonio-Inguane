export type GalleryCategory = "conferences" | "awards" | "fieldwork";

export type GalleryItem = {
  id: string;
  category: GalleryCategory;
  src: string;
  caption: { en: string; pt: string };
};

// Empty for now; add entries here once photos are available.
export const galleryItems: GalleryItem[] = [];

export const galleryCategories: GalleryCategory[] = [
  "conferences",
  "awards",
  "fieldwork",
];
