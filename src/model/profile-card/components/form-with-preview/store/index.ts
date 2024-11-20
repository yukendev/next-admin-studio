import { create } from "zustand";

import {
  type ValidationSlice,
  validationSlice,
} from "@/model/common/store/slice/validation";

import {
  type AdminLabelSlice,
  createAdminLabelSlice,
} from "../form/inputs/admin-label/slice";
import {
  type BirthdaySlice,
  createBirthdaySlice,
} from "../form/inputs/birthday/slice";
import {
  type LuckyNumberSlice,
  createLuckyNumberSlice,
} from "../form/inputs/lucky-number/slice";
import { type NameSlice, createNameSlice } from "../form/inputs/name/slice";
import { type TagsSlice, createTagsSlice } from "../form/inputs/tags/slice";
import type { ProfileCardFormSlice } from "./type";

export const useProfileCardFormStore = create<
  AdminLabelSlice &
    BirthdaySlice &
    LuckyNumberSlice &
    NameSlice &
    TagsSlice &
    ValidationSlice &
    ProfileCardFormSlice & {
      getFormIsValid: () => boolean;
    }
>()((set, get, store) => {
  return {
    ...validationSlice(set, get, store),
    ...createAdminLabelSlice(set, get, store),
    ...createBirthdaySlice(set, get, store),
    ...createLuckyNumberSlice(set, get, store),
    ...createNameSlice(set, get, store),
    ...createTagsSlice(set, get, store),
    setProfileCardForm: (profileCardForm) =>
      set({
        adminLabel: profileCardForm.adminLabel,
        birthday: profileCardForm.birthday,
        luckyNumber: profileCardForm.luckyNumber,
        name: profileCardForm.name,
        tags: profileCardForm.tags,
      }),
    getFormIsValid: () =>
      get().getAdminLabelIsValid() &&
      get().getBirthdayIsValid() &&
      get().getLuckyNumberIsValid() &&
      get().getNameIsValid() &&
      get().getTagsIsValid(),
    getFormValue: () => ({
      adminLabel: get().adminLabel,
      birthday: get().birthday,
      luckyNumber: get().luckyNumber,
      name: get().name,
      tags: get().tags,
    }),
  };
});
