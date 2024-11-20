"use client";

import { type FC, createContext, useRef } from "react";
import { createProfileCardFormStore } from ".";

export type ProfileCardFormStoreApi = ReturnType<
  typeof createProfileCardFormStore
>;

export const ProfileCardFormStoreContext = createContext<
  ProfileCardFormStoreApi | undefined
>(undefined);

export const ProfileCardFormStoreProvider: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const storeRef = useRef<ProfileCardFormStoreApi>();
  if (!storeRef.current) {
    storeRef.current = createProfileCardFormStore();
  }

  return (
    <ProfileCardFormStoreContext.Provider value={storeRef.current}>
      {children}
    </ProfileCardFormStoreContext.Provider>
  );
};
