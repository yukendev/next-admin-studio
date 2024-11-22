import type { GalleryItem } from "./gallery-select/type";

export type FileInputWithGalleryInputType = "select" | "upload";

export type FileInputWithGalleryValue = {
  thumbnailUrl: string | null;
  thumbnailUrlInputType: FileInputWithGalleryInputType;
  thumbnailUrlGalleryInput: {
    item: GalleryItem | null;
  };
  thumbnailUrlFileInput: {
    file: File | null;
    url: string | null;
  };
};
