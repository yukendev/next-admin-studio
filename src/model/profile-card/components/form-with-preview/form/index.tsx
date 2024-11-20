import type { FC } from "react";

import { ProfileCardAdminLabelInput } from "./inputs/admin-label";
import { ProfileCardLuckyNumberInput } from "./inputs/lucky-number";
import { ProfileCardNameInput } from "./inputs/name";
import { ProfileCardFormWrapper } from "./wrapper";
import { ProfileCardTagsInput } from "./inputs/tags";
import { ProfileCardBirthdayInput } from "./inputs/birthday";

export const ProfileCardForm: FC = () => {
  return (
    <ProfileCardFormWrapper>
      <ProfileCardAdminLabelInput />
      <ProfileCardNameInput />
      <ProfileCardBirthdayInput />
      <ProfileCardLuckyNumberInput />
      <ProfileCardTagsInput />
    </ProfileCardFormWrapper>
  );
};
