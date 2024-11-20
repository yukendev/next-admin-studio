import { useContext } from "react";
import { useStore } from "zustand";
import { ProfileCardFormStoreContext } from "./provider";
import type { ProfileCardFormStore } from "./type";

export const useProfileCardFormStore = <T>(
  selector: (store: ProfileCardFormStore) => T,
): T => {
  const profileCardFormStoreContext = useContext(ProfileCardFormStoreContext);

  if (!profileCardFormStoreContext) {
    throw new Error(
      "useProfileCardFormStore must be used within ProfileCardFormStoreProvider",
    );
  }

  return useStore(profileCardFormStoreContext, selector);
};
