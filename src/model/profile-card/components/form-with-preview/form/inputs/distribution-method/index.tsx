import { Select } from "@/common/components/form/select";
import { Stack } from "@mantine/core";
import type { FC } from "react";
import { match } from "ts-pattern";
import { value } from "valibot";
import {
  PROFILE_DISTRIBUTION_METHOD_OPTIONS,
  PROFILE_DISTRIBUTUIN_METHOD,
  type ProfileDistributionMethod,
} from "./const";

export const ProfileCardDistributionMethodInput: FC = () => {
  return (
    <Stack>
      <Select
        label="配布方法"
        description="クーポンを配布する方法です。"
        required
        data={PROFILE_DISTRIBUTION_METHOD_OPTIONS}
        value={value}
        onChange={setValue}
        errorMessages={errorMessages}
      />
      {renderView(value)}
    </Stack>
  );
};

const renderView = (value: ProfileDistributionMethod | null) =>
  match(value)
    .with(PROFILE_DISTRIBUTUIN_METHOD.ALL_USERS.VALUE, () => (
      <ProfileDistributionMethodAllUsersView />
    ))
    .with(PROFILE_DISTRIBUTUIN_METHOD.MEMBER_USERS_BY_CONDITIONS.VALUE, () => (
      <ProfileDistributionMethodMemberUsersByConditionsView />
    ))
    .with(
      PROFILE_DISTRIBUTUIN_METHOD.MEMBER_USERS_BY_MEMBER_INTEGRATION_ID.VALUE,
      () => <ProfileDistributionMethodMemberUsersByMemberIntegrationIdView />,
    )
    .with(PROFILE_DISTRIBUTUIN_METHOD.MEMBER_USERS_BY_URL.VALUE, () => (
      <ProfileDistributionMethodMemberUsersByUrlView />
    ))
    .with(null, () => <></>)
    .exhaustive();
