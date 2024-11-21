import type { StateCreator } from 'zustand'

export type FreeWordSlice = {
  freeWord: string;
  setFreeWord: (freeWord: string) => void;
}

export const createFreeWordSlice: StateCreator<FreeWordSlice> = (set) => ({
  freeWord: "",
  setFreeWord: (freeWord) => set({ freeWord }),
});
