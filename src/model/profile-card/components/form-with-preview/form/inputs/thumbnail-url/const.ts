import type { FileInputWithGalleryValue } from "@/common/components/form/file-input-with-gallery-select/type";

export const PROFILE_CARD_THUMBNAIL_URL_DEFAULT_VALUE: FileInputWithGalleryValue =
  {
    url: null,
    inputType: "select",
    galleryInput: {
      item: null,
    },
    fileInput: {
      file: null,
      url: null,
    },
  };
