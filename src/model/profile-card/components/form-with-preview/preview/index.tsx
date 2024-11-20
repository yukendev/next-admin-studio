"use client";

import { Stack } from "@mantine/core";

import { ProfileCardBirthdayPreviewContainer } from "./birthday";
import { ProfileCardLuckyNumberPreviewContainer } from "./lucky-number";
import { ProfileCardNamePreviewContainer } from "./name";
import { ProfileCardTagsPreviewContainer } from "./tags";

export const ProfileCardFormPreview = () => {
  return (
    <Stack
      w={400}
      h={270}
      className="rounded-md border border-gray-200 border-solid p-4 shadow-lg"
    >
      <ProfileCardNamePreviewContainer />
      <ProfileCardBirthdayPreviewContainer />
      <ProfileCardLuckyNumberPreviewContainer />
      <ProfileCardTagsPreviewContainer />
    </Stack>
  );
};
