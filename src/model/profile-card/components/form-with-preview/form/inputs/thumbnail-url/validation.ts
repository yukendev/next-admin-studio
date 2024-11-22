import { notEmptyFileInputWithGalleryValidation } from "@/common/lib/form-validation/file-input-with-gallery";
import type { MultiValidationFn } from "@/common/lib/form-validation/type";

export const validateProfileCardThumbnailUrlOnSubmit: MultiValidationFn<
  string | null
> = (v) => [notEmptyFileInputWithGalleryValidation(v)];

export const validateProfileCardThumbnailUrlOnChange: MultiValidationFn<
  string | null
> = (_v) => [];
