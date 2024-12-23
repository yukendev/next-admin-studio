import { getValidationtErrorMessage } from "@/model/common/lib/get-validation-error-message";
import type { FormInputSliceCreater } from "@/model/common/types/form-input-slice";

import type { ProfileCardForm } from "../../../store/type";
import { validateProfileCardBirthdayOnSubmit } from "./validation";

export type BirthdaySlice = {
  birthday: Date | null;
  setBirthday: (birthday: Date | null) => void;
  getBirthdayErrorMessages: () => string[];
  getBirthdayIsValid: () => boolean;
};

export const createBirthdaySlice: FormInputSliceCreater<
  BirthdaySlice,
  Pick<ProfileCardForm, "birthday">
> = (initialState) => (set, get) => ({
  birthday: initialState.birthday,
  setBirthday: (birthday) => set({ birthday }),
  getBirthdayErrorMessages: () => {
    const birthday = get().birthday;
    return getValidationtErrorMessage({
      phase: get().validationPhase,
      validations: {
        onConfirmSubmit: validateProfileCardBirthdayOnSubmit(birthday),
      },
    });
  },
  getBirthdayIsValid: () => {
    const errorMessages = get().getBirthdayErrorMessages();
    return errorMessages.length === 0;
  },
});
