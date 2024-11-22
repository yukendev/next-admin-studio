import type { MultiValidationFn } from "@/common/lib/form-validation/type";
import type { ProfileDistributionMethodInputValue } from "./type";

export const validateProfileDistributionMethodOnSubmit: MultiValidationFn<
  ProfileDistributionMethodInputValue
> = (_v) => [];

export const validateProfileDistributionMethodOnChange: MultiValidationFn<
  ProfileDistributionMethodInputValue
> = (_v) => [];
