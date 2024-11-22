"use client";

import { type FC, createContext, useRef } from "react";
import type { ProfileCardSearchParams } from "./params";
import { createProfileCardSearchStore } from "./store";

export const ProfileCardSearchStoreContext = createContext<
  ReturnType<typeof createProfileCardSearchStore> | undefined
>(undefined);

export const ProfileCardSearchStoreProvider: FC<{
  children: React.ReactNode;
  initialState?: ProfileCardSearchParams;
}> = ({ children, initialState }) => {
  const storeRef = useRef<ReturnType<typeof createProfileCardSearchStore>>();

  if (!storeRef.current) {
    storeRef.current = createProfileCardSearchStore(initialState);
  }

  return (
    <ProfileCardSearchStoreContext.Provider value={storeRef.current}>
      {children}
    </ProfileCardSearchStoreContext.Provider>
  );
};
