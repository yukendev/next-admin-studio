import { notEmptyNumberInputValidation } from "@/common/lib/form-validation/number-input";
import type { MultiValidationFn } from "@/common/lib/form-validation/type";

export const validateProfileCardLuckyNumberOnSubmit: MultiValidationFn<
  string | number
> = (v) => [notEmptyNumberInputValidation(v)];
