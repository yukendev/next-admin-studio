import type { InputType } from "@/common/components/form/file-input-with-gallery-select";
import type { GalleryItem } from "@/common/components/form/file-input-with-gallery-select/gallery-select/type";

import { getValidationtErrorMessage } from "@/model/common/lib/get-validation-error-message";
import type { FormInputSliceCreater } from "@/model/common/types/form-input-slice";
import { match } from "ts-pattern";
import { getGalleryItem, isGalleryItem } from "./lib";
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
  thumbnailUrlGalleryItem: GalleryItem | null;
  // アップロードした画像
  thumbnailUrlInputFile: File | null;

  setThumbnailUploadedUrl: (thumbnailUrl: string | null) => void;
  setThumbnailUrlInputType: (inputType: InputType) => void;
  setThumbnailUrlInputFile: (file: File | null) => void;
  setThumbnailUrlGalleryItem: (galleryItem: GalleryItem | null) => void;
  getThumbnailUrlErrorMessages: () => string[];
  getThumbnailUrlIsValid: () => boolean;
};

export const createThumbnailUrlSlice: FormInputSliceCreater<
  ThumbnailUrlSlice,
  "thumbnailUploadedUrl"
> = (initialState) => (set, get) => ({
  // initialStateを利用して各stateを初期化
  thumbnailUploadedUrl: match(get().thumbnailUrlInputType)
    .with("select", () => get().thumbnailUrlGalleryItem?.url ?? null)
    .with("upload", () => get().thumbnailUploadedUrl)
    .otherwise(() => null),
  thumbnailUrlInputType: isGalleryItem(initialState?.thumbnailUploadedUrl)
    ? "select"
    : "upload",
  thumbnailUrlGalleryItem: initialState?.thumbnailUploadedUrl
    ? getGalleryItem(initialState?.thumbnailUploadedUrl)
    : null,
  thumbnailUrlInputFile: initialState?.thumbnailUploadedUrl
    ? isGalleryItem(initialState?.thumbnailUploadedUrl)
      ? null
      : new File([], "")
    : null,

  setThumbnailUploadedUrl: (thumbnailUrl) => {
    set({ thumbnailUploadedUrl: thumbnailUrl });
    // TODO: 諸々の処理
  },
  setThumbnailUrlInputType: (inputType) => {
    set({ thumbnailUrlInputType: inputType });
  },
  setThumbnailUrlInputFile: (file) => {
    set({ thumbnailUrlInputFile: file });
  },
  setThumbnailUrlGalleryItem: (galleryItem) => {
    set({ thumbnailUrlGalleryItem: galleryItem });
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
});
