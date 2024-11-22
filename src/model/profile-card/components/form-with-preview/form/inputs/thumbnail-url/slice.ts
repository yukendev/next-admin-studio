import type { GalleryItem } from "@/common/components/form/file-input-with-gallery-select/gallery-select/type";

import type {
  FileInputWithGalleryInputType,
  FileInputWithGalleryValue,
} from "@/common/components/form/file-input-with-gallery-select/type";
import { getValidationtErrorMessage } from "@/model/common/lib/get-validation-error-message";
import type { FormInputSliceCreater } from "@/model/common/types/form-input-slice";
import type { ProfileCardForm } from "../../../store/type";
import { getThumbnailUrlValue } from "./lib";
import {
  validateProfileCardThumbnailUrlOnChange,
  validateProfileCardThumbnailUrlOnSubmit,
} from "./validation";

export type ThumbnailUrlSlice = {
  thumbnailUrl: FileInputWithGalleryValue;

  setThumbnailUrl: (thumbnailUrl: string | null) => void;
  setThumbnailUrlInputType: (inputType: FileInputWithGalleryInputType) => void;
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
  Pick<ProfileCardForm, "thumbnailUrl">
> = (initialState) => (set, get) => {
  return {
    thumbnailUrl: initialState.thumbnailUrl,

    setThumbnailUrl: (thumbnailUrl) => {
      set({ thumbnailUrl: getThumbnailUrlValue(thumbnailUrl) });
    },
    setThumbnailUrlInputType: (inputType) => {
      set({ thumbnailUrl: { ...get().thumbnailUrl, inputType } });
    },
    setThumbnailUrlFileInput: (fileInput) => {
      set({ thumbnailUrl: { ...get().thumbnailUrl, fileInput } });
    },
    setThumbnailUrlGalleryInput: (galleryItem) => {
      set({
        thumbnailUrl: {
          ...get().thumbnailUrl,
          galleryInput: {
            item: galleryItem,
          },
        },
      });
    },
    getThumbnailUrlErrorMessages: () => {
      const value = get().thumbnailUrl;

      return getValidationtErrorMessage({
        phase: get().validationPhase,
        validations: {
          onChange: validateProfileCardThumbnailUrlOnChange(value.url),
          onConfirmSubmit: validateProfileCardThumbnailUrlOnSubmit(value.url),
        },
      });
    },
    getThumbnailUrlIsValid: () => {
      const errorMessages = get().getThumbnailUrlErrorMessages();
      return errorMessages.length === 0;
    },
  };
};
