export const isGalleryItem = (_url: string | undefined | null) => {
  return false;
};

export const getGalleryItem = (_url: string) => {
  return null;
};

export const getThumbnailUrlValue = (thumbnailUrl: string | null) => {
  const thumbnailUrlInputType = isGalleryItem(thumbnailUrl)
    ? ("select" as const)
    : ("upload" as const);

  const thumbnailUrlGalleryItem = thumbnailUrl
    ? getGalleryItem(thumbnailUrl)
    : null;

  const thumbnailUrlInputFile = thumbnailUrl
    ? isGalleryItem(thumbnailUrl)
      ? null
      : new File([], "")
    : null;

  const fileInputUrl = thumbnailUrlInputType === "upload" ? thumbnailUrl : null;

  return {
    thumbnailUrl,
    thumbnailUrlInputType,
    thumbnailUrlGalleryInput: {
      item: thumbnailUrlGalleryItem,
    },
    thumbnailUrlFileInput: {
      file: thumbnailUrlInputFile,
      url: fileInputUrl,
    },
  };
};
