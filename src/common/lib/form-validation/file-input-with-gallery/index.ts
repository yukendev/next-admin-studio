import { isEmpty, isNonNull } from "@/common/lib/guard";
import type { ValidationFn } from "../type";

export const FILE_INPUT_WITH_GALLERY_VALIDATION_ERROR_MESSAGE = {
  EMPTY_INPUT: "画像を選択またはアップロードしてください🌠",
} as const;

/**
 * nullでなければOK
 */
export const notEmptyFileInputWithGalleryValidation: ValidationFn<
  string | null
> = (v) => {
  const key = "EMPTY_INPUT";
  return {
    key,
    input: v,
    isOk: isNonNull(v) && !isEmpty(v),
    errorMessage: FILE_INPUT_WITH_GALLERY_VALIDATION_ERROR_MESSAGE[key],
  };
};
