import type { FileInputWithGalleryValue } from "@/common/components/form/file-input-with-gallery-select/type";
import { getGalleryItem, isGalleryItem } from "./lib";

export const profileCardThumbnailUrlConverter = {
  toClient: (value: string | null): FileInputWithGalleryValue => {
    const thumbnailUrlInputType = isGalleryItem(value)
      ? ("select" as const)
      : ("upload" as const);

    const thumbnailUrlGalleryItem = value ? getGalleryItem(value) : null;

    const thumbnailUrlInputFile = value
      ? isGalleryItem(value)
        ? null
        : new File([], "")
      : null;

    const fileInputUrl = thumbnailUrlInputType === "upload" ? value : null;

    return {
      url: value ?? null,
      inputType: thumbnailUrlInputType,
      galleryInput: {
        item: thumbnailUrlGalleryItem,
      },
      fileInput: {
        file: thumbnailUrlInputFile,
        url: fileInputUrl,
      },
    };
  },
  toServer: (value: string | undefined | null) => value ?? null,
};
