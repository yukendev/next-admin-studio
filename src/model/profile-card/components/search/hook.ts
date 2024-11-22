import { useContext } from "react";
import { useStore } from "zustand";
import { ProfileCardSearchStoreContext } from "./provider";
import type { ProfileCardSearchStore } from "./store";

export const useProfileCardSearchStore = <T>(
  selector: (store: ProfileCardSearchStore) => T,
): T => {
  const profileCardSearchStoreContext = useContext(
    ProfileCardSearchStoreContext,
  );

  if (!profileCardSearchStoreContext) {
    throw new Error(
      "useProfileCardSearchStore must be used within a ProfileCardSearchStoreProvider",
    );
  }
  return useStore(profileCardSearchStoreContext, selector);
};
