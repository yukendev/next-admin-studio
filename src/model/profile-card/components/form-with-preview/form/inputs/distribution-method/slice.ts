import { getValidationtErrorMessage } from "@/model/common/lib/get-validation-error-message";
import type { FormInputSliceCreater } from "@/model/common/types/form-input-slice";
import type { ProfileCardForm } from "../../../store/type";
import type { ProfileDistributionMethodInputValue } from "./type";
import {
  validateProfileDistributionMethodOnChange,
  validateProfileDistributionMethodOnSubmit,
} from "./validation";
import { createProfileDistributionMethodByConditionInputSlice } from "./view/by-condition/slice";

export type DistributionMethodSlice = {
  distributionMethod: ProfileDistributionMethodInputValue;
  setDistributionMethod: (
    distributionMethod: ProfileDistributionMethodInputValue,
  ) => void;
  getDistributionMethodErrorMessages: () => string[];
  getDistributionMethodIsValid: () => boolean;
};

export const createDistributionMethodSlice: FormInputSliceCreater<
  DistributionMethodSlice,
  Pick<ProfileCardForm, "distributionMethod">
> = (initialState) => (set, get, store) => ({
  distributionMethod: {
    type: initialState.distributionMethod.type,
    conditional: createProfileDistributionMethodByConditionInputSlice(
      initialState.distributionMethod.conditional,
    )(set, get, store),
  },

  setDistributionMethod: (distributionMethod) => set({ distributionMethod }),
  getDistributionMethodErrorMessages: () => {
    const value = get().distributionMethod;
    return getValidationtErrorMessage({
      phase: get().validationPhase,
      validations: {
        onChange: validateProfileDistributionMethodOnChange(value),
        onConfirmSubmit: validateProfileDistributionMethodOnSubmit(value),
      },
    });
  },
  getDistributionMethodIsValid: () => {
    const value = get().distributionMethod;
    return validateProfileDistributionMethodOnChange(value).length === 0;
  },
});
