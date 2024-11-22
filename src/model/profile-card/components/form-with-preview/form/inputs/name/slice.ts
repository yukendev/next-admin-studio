import { getValidationtErrorMessage } from "@/model/common/lib/get-validation-error-message";

import type { FormInputSliceCreater } from "@/model/common/types/form-input-slice";
import type { ProfileCardForm } from "../../../store/type";
import {
  validateProfileCardNameOnChange,
  validateProfileCardNameOnSubmit,
} from "./validation";

export type NameSlice = {
  name: string;
  setName: (name: string) => void;
  getNameErrorMessages: () => string[];
  getNameIsValid: () => boolean;
};

export const createNameSlice: FormInputSliceCreater<
  NameSlice,
  Pick<ProfileCardForm, "name">
> = (initialState) => (set, get) => ({
  name: initialState.name,
  setName: (name) => set({ name }),
  getNameErrorMessages: () => {
    const value = get().name;
    return getValidationtErrorMessage({
      phase: get().validationPhase,
      validations: {
        onChange: validateProfileCardNameOnChange(value),
        onConfirmSubmit: validateProfileCardNameOnSubmit(value),
      },
    });
  },
  getNameIsValid: () => {
    const errorMessages = get().getNameErrorMessages();
    return errorMessages.length === 0;
  },
});
