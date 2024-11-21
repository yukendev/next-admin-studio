"use client";

import { type FC, type ReactNode, createContext, useRef } from "react";
import type { ProfileCardFormServerState } from "./type";

export const ProfileCardFormServerStateStoreContext = createContext<
  ProfileCardFormServerState | undefined
>(undefined);

export const ProfileCardFormServerStateProvider: FC<{
  children: ReactNode;
  initialState?: ProfileCardFormServerState;
}> = ({ children, initialState }) => {
  const storeRef = useRef<ProfileCardFormServerState>();
  if (!storeRef.current) {
    storeRef.current = initialState;
  }

  return (
    <ProfileCardFormServerStateStoreContext.Provider value={storeRef.current}>
      {children}
    </ProfileCardFormServerStateStoreContext.Provider>
  );
};
