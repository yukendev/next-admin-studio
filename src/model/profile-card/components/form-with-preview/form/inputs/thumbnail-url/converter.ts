import { getGalleryItem, isGalleryItem } from "./lib";
import type { ProfileCardThumbnailUrlInputType } from "./type";

export const profileCardThumbnailUrlConverter = {
  toClient: (value: string | null): ProfileCardThumbnailUrlInputType => {
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
      thumbnailUrl: value ?? null,
      thumbnailUrlInputType,
      thumbnailUrlGalleryInput: {
        item: thumbnailUrlGalleryItem,
      },
      thumbnailUrlFileInput: {
        file: thumbnailUrlInputFile,
        url: fileInputUrl,
      },
    };
  },
  toServer: (value: string | undefined | null) => value ?? null,
};
