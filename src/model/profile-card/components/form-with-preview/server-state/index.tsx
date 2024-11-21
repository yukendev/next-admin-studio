import type { FC, ReactNode } from "react";
import { profileCardConverter } from "../converter";
import { getProfileCard } from "../query";
import type { ProfileCardForm } from "../store/type";
import { ProfileCardFormServerStateProvider } from "./provider";

export const ProfileCardFormServerStateProviderContainer: FC<{
  id: string;
  children: (formValue: ProfileCardForm | undefined) => ReactNode;
}> = async ({ id, children }) => {
  const serverState = await getProfileCard(id);
  const formValue = profileCardConverter.toClient(serverState);

  return (
    <ProfileCardFormServerStateProvider initialState={serverState}>
      {children(formValue)}
    </ProfileCardFormServerStateProvider>
  );
};