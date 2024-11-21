import { useContext } from "react";
import { ProfileCardFormServerStateStoreContext } from "./provider";

export const useProfileCardFormServerState = () => {
  return useContext(ProfileCardFormServerStateStoreContext);
};
