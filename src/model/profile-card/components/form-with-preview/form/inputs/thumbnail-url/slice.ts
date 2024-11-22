import type { InputType } from "@/common/components/form/file-input-with-gallery-select";
import type { GalleryItem } from "@/common/components/form/file-input-with-gallery-select/gallery-select/type";

import { getValidationtErrorMessage } from "@/model/common/lib/get-validation-error-message";
import type { FormInputSliceCreater } from "@/model/common/types/form-input-slice";
import { getThumbnailUrlValue } from "./lib";
import {
  validateProfileCardThumbnailUrlOnChange,
  validateProfileCardThumbnailUrlOnSubmit,
} from "./validation";

export type ThumbnailUrlSlice = {
  // アップロードした画像のS3のURL
  thumbnailUploadedUrl: string | null;
  // サムネイルがギャラリーから選択されているか、アップロードした画像から選択されているか
  thumbnailUrlInputType: InputType;

  // ギャラリーから選択された画像
  galleryInput: {
    thumbnailUrlGalleryItem: GalleryItem | null;
  };
  // ファイル入力関連のstate
  fileInput: {
    file: File | null;
    url: string | null;
  };

  setThumbnailUploadedUrl: (thumbnailUrl: string | null) => void;
  setThumbnailUrlInputType: (inputType: InputType) => void;
  setThumbnailUrlFileInput: (fileInput: {
    file: File | null;
    url: string | null;
  }) => void;
  setThumbnailUrlGalleryInput: (galleryItem: GalleryItem | null) => void;
  getThumbnailUrlErrorMessages: () => string[];
  getThumbnailUrlIsValid: () => boolean;
};

export const createThumbnailUrlSlice: FormInputSliceCreater<
  ThumbnailUrlSlice,
  "thumbnailUploadedUrl"
> = (initialState) => (set, get) => {
  const initialValue = getThumbnailUrlValue(
    initialState?.thumbnailUploadedUrl ?? null,
  );

  return {
    // initialStateを利用して各stateを初期化
    ...initialValue,

    setThumbnailUploadedUrl: (thumbnailUrl) => {
      set(getThumbnailUrlValue(thumbnailUrl));
    },
    setThumbnailUrlInputType: (inputType) => {
      set({ thumbnailUrlInputType: inputType });
    },
    setThumbnailUrlFileInput: (fileInput) => {
      set({ fileInput });
    },
    setThumbnailUrlGalleryInput: (galleryItem) => {
      set({
        galleryInput: {
          ...get().galleryInput,
          thumbnailUrlGalleryItem: galleryItem,
        },
      });
    },
    getThumbnailUrlErrorMessages: () => {
      const value = get().thumbnailUploadedUrl;

      return getValidationtErrorMessage({
        phase: get().validationPhase,
        validations: {
          onChange: validateProfileCardThumbnailUrlOnChange(value),
          onConfirmSubmit: validateProfileCardThumbnailUrlOnSubmit(value),
        },
      });
    },
    getThumbnailUrlIsValid: () => {
      const errorMessages = get().getThumbnailUrlErrorMessages();
      return errorMessages.length === 0;
    },
  };
};
