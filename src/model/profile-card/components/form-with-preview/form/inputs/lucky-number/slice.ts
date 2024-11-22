import { getValidationtErrorMessage } from "@/model/common/lib/get-validation-error-message";
import type { FormInputSliceCreater } from "@/model/common/types/form-input-slice";

import type { ProfileCardForm } from "../../../store/type";
import { validateProfileCardLuckyNumberOnSubmit } from "./validation";

export type LuckyNumberSlice = {
  luckyNumber: number;
  setLuckyNumber: (luckyNumber: number) => void;
  getLuckyNumberErrorMessages: () => string[];
  getLuckyNumberIsValid: () => boolean;
};

export const createLuckyNumberSlice: FormInputSliceCreater<
  LuckyNumberSlice,
  Pick<ProfileCardForm, "luckyNumber">
> = (initialState) => (set, get) => ({
  luckyNumber: initialState.luckyNumber,
  setLuckyNumber: (luckyNumber) => set({ luckyNumber }),
  getLuckyNumberErrorMessages: () => {
    const value = get().luckyNumber;
    return getValidationtErrorMessage({
      phase: get().validationPhase,
      validations: {
        onConfirmSubmit: validateProfileCardLuckyNumberOnSubmit(value),
      },
    });
  },
  getLuckyNumberIsValid: () => {
    const errorMessages = get().getLuckyNumberErrorMessages();
    return errorMessages.length === 0;
  },
});
