import { getValidationtErrorMessage } from "@/model/common/lib/get-validation-error-message";
import type { FormInputSliceCreater } from "@/model/common/types/form-input-slice";

import {
  validateProfileCardAdminLabelOnChange,
  validateProfileCardAdminLabelOnSubmit,
} from "./validation";

export type AdminLabelSlice = {
  adminLabel: string;
  setAdminLabel: (adminLabel: string) => void;
  getAdminLabelErrorMessages: () => string[];
  getAdminLabelIsValid: () => boolean;
};

export const createAdminLabelSlice: FormInputSliceCreater<
  AdminLabelSlice,
  "adminLabel"
> = (initialState) => (set, get) => ({
  adminLabel: initialState?.adminLabel ?? "",
  setAdminLabel: (adminLabel) => set({ adminLabel }),
  getAdminLabelErrorMessages: () => {
    const value = get().adminLabel;
    return getValidationtErrorMessage({
      phase: get().validationPhase,
      validations: {
        onChange: validateProfileCardAdminLabelOnChange(value),
        onConfirmSubmit: validateProfileCardAdminLabelOnSubmit(value),
      },
    });
  },
  getAdminLabelIsValid: () => {
    const errorMessages = get().getAdminLabelErrorMessages();
    return errorMessages.length === 0;
  },
});
