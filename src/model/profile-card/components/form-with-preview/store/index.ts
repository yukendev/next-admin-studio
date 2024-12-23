import { create } from "zustand";

import { validationSlice } from "@/model/common/store/slice/validation";
import { createAdminLabelSlice } from "../form/inputs/admin-label/slice";
import { createBirthdaySlice } from "../form/inputs/birthday/slice";
import { createDistributionMethodSlice } from "../form/inputs/distribution-method/slice";
import { createLuckyNumberSlice } from "../form/inputs/lucky-number/slice";
import { createNameSlice } from "../form/inputs/name/slice";
import { createTagsSlice } from "../form/inputs/tags/slice";
import { createThumbnailUrlSlice } from "../form/inputs/thumbnail-url/slice";
import type { ProfileCardForm, ProfileCardFormStore } from "./type";

export const createProfileCardFormStore = (initialState: ProfileCardForm) =>
  create<ProfileCardFormStore>()((set, get, store) => {
    return {
      ...validationSlice(set, get, store),
      ...createAdminLabelSlice(initialState)(set, get, store),
      ...createBirthdaySlice(initialState)(set, get, store),
      ...createLuckyNumberSlice(initialState)(set, get, store),
      ...createNameSlice(initialState)(set, get, store),
      ...createTagsSlice(initialState)(set, get, store),
      ...createThumbnailUrlSlice(initialState)(set, get, store),
      ...createDistributionMethodSlice(initialState)(set, get, store),
      id: initialState?.id ?? "",
      setId: (id) => set({ id }),
      setProfileCardForm: (profileCardForm) =>
        set({
          ...profileCardForm,
        }),
      getFormIsValid: () =>
        get().getAdminLabelIsValid() &&
        get().getBirthdayIsValid() &&
        get().getLuckyNumberIsValid() &&
        get().getNameIsValid() &&
        get().getTagsIsValid() &&
        get().getThumbnailUrlIsValid(),
      getFormValue: get,
    };
  });
