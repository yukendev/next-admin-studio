import {
  maxLengthValidation,
  notEmptyTagsInputValidation,
} from "@/common/lib/form-validation/tags-input";
import type { MultiValidationFn } from "@/common/lib/form-validation/type";

export const validateProfileCardTagsOnSubmit: MultiValidationFn<string[]> = (
  v,
) => [notEmptyTagsInputValidation(v)];

export const validateProfileCardTagsOnChange: MultiValidationFn<string[]> = (
  v,
) => [maxLengthValidation(15)(v)];
