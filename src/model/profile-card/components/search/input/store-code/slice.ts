import type { StateCreator } from 'zustand'

export type StoreCodeSlice = {
  storeCode: string[];
  setStoreCode: (storeCode: string[]) => void;
}

export const createStoreCodeSlice: StateCreator<StoreCodeSlice> = (set) => ({
  storeCode: [],
  setStoreCode: (storeCode) => set({ storeCode }),
});
