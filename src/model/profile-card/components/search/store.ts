import { create } from "zustand";

import {
  type FreeWordSlice,
  createFreeWordSlice,
} from "./input/free-word/slice";
import {
  type StoreCodeSlice,
  createStoreCodeSlice,
} from "./input/store-code/slice";
import type { ProfileCardSearchParams } from "./params";

export type ProfileCardSearchStore = FreeWordSlice & StoreCodeSlice;

export const createProfileCardSearchStore = (
  initialState?: ProfileCardSearchParams,
) =>
  create<ProfileCardSearchStore>((set, get, store) => ({
    ...createFreeWordSlice(set, get, store),
    ...createStoreCodeSlice(set, get, store),
    ...initialState,
  }));
