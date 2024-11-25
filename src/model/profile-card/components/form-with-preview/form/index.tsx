import type { FC } from "react";

import { ProfileCardAdminLabelInput } from "./inputs/admin-label";
import { ProfileCardBirthdayInput } from "./inputs/birthday";
import { ProfileCardDistributionMethodInput } from "./inputs/distribution-method";
import { ProfileCardLuckyNumberInput } from "./inputs/lucky-number";
import { ProfileCardNameInput } from "./inputs/name";
import { ProfileCardTagsInput } from "./inputs/tags";
import { ProfileCardThumbnailUrlInput } from "./inputs/thumbnail-url";
import { ProfileCardFormWrapper } from "./wrapper";

export const ProfileCardForm: FC = () => {
  return (
    <ProfileCardFormWrapper>
      <ProfileCardAdminLabelInput />
      <ProfileCardNameInput />
      <ProfileCardBirthdayInput />
      <ProfileCardLuckyNumberInput />
      <ProfileCardTagsInput />
      <ProfileCardThumbnailUrlInput />
      <ProfileCardDistributionMethodInput />
    </ProfileCardFormWrapper>
  );
};
