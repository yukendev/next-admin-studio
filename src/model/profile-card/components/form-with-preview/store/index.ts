import { create } from "zustand";

import { validationSlice } from "@/model/common/store/slice/validation";
import { createAdminLabelSlice } from "../form/inputs/admin-label/slice";
import { createBirthdaySlice } from "../form/inputs/birthday/slice";
import { createLuckyNumberSlice } from "../form/inputs/lucky-number/slice";
import { createNameSlice } from "../form/inputs/name/slice";
import { createTagsSlice } from "../form/inputs/tags/slice";
import { createThumbnailUrlSlice } from "../form/inputs/thumbnail-url/slice";
import type { ProfileCardForm, ProfileCardFormStore } from "./type";

export const createProfileCardFormStore = (initialState?: ProfileCardForm) =>
  create<ProfileCardFormStore>()((set, get, store) => {
    return {
      ...validationSlice(set, get, store),
      ...createAdminLabelSlice(set, get, store),
      ...createBirthdaySlice(set, get, store),
      ...createLuckyNumberSlice(set, get, store),
      ...createNameSlice(set, get, store),
      ...createTagsSlice(set, get, store),
      ...createThumbnailUrlSlice(set, get, store),
      id: "",
      setId: (id) => set({ id }),
      setProfileCardForm: (profileCardForm) =>
        set({
          id: profileCardForm.id,
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
        id: get().id,
        adminLabel: get().adminLabel,
        birthday: get().birthday,
        luckyNumber: get().luckyNumber,
        name: get().name,
        tags: get().tags,
      }),
      ...initialState,
    };
  });
