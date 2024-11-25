import { Stack } from "@mantine/core";
import type { FC } from "react";
import { ProfileDistributionMethodByConditionInputCards } from "./input/cards";
import { ProfileDistributionMethodIsStuff } from "./input/is-stuff";

export const ProfileDistributionMethodByConditionView: FC = () => (
  <Stack>
    <ProfileDistributionMethodIsStuff />
    <ProfileDistributionMethodByConditionInputCards />
  </Stack>
);
