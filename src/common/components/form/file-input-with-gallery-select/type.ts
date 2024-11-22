import type { GalleryItem } from "./gallery-select/type";

export type FileInputWithGalleryInputType = "select" | "upload";

export type FileInputWithGalleryValue = {
  url: string | null;
  inputType: FileInputWithGalleryInputType;
  galleryInput: {
    item: GalleryItem | null;
  };
  fileInput: {
    file: File | null;
    url: string | null;
  };
};
