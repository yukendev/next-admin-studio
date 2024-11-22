export const isGalleryItem = (_url: string | undefined | null) => {
  return false;
};

export const getGalleryItem = (_url: string) => {
  return null;
};

export const getThumbnailUrlValue = (thumbnailUploadedUrl: string | null) => {
  const thumbnailUrlInputType = isGalleryItem(thumbnailUploadedUrl)
    ? ("select" as const)
    : ("upload" as const);

  const thumbnailUrlGalleryItem = thumbnailUploadedUrl
    ? getGalleryItem(thumbnailUploadedUrl)
    : null;

  const thumbnailUrlInputFile = thumbnailUploadedUrl
    ? isGalleryItem(thumbnailUploadedUrl)
      ? null
      : new File([], "")
    : null;

  const fileInputUrl =
    thumbnailUrlInputType === "upload" ? thumbnailUploadedUrl : null;

  return {
    thumbnailUploadedUrl,
    thumbnailUrlInputType,
    galleryInput: {
      thumbnailUrlGalleryItem,
    },
    fileInput: {
      file: thumbnailUrlInputFile,
      url: fileInputUrl,
    },
  };
};
