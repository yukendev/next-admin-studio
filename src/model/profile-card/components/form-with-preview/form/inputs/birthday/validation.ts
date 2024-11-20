import { notEmptyDateValidation } from "@/common/lib/form-validation/date-input";
import type { MultiValidationFn } from "@/common/lib/form-validation/type";

export const validateProfileCardBirthdayOnSubmit: MultiValidationFn<Date | null> = (
  v,
) => [notEmptyDateValidation(v)];

