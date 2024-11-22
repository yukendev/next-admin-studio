"use client";

import { Stack } from "@mantine/core";
import { useProfileCardFormStore } from "../store/hook";
import { ProfileCardBirthdayPreviewContainer } from "./birthday";
import { ProfileCardLuckyNumberPreviewContainer } from "./lucky-number";
import { ProfileCardNamePreviewContainer } from "./name";
import { ProfileCardTagsPreviewContainer } from "./tags";

// フォームの値を可視化するためだけのコンポーネント
const FormValueStringifying = () => {
  const adminLabel = useProfileCardFormStore((state) => state.adminLabel);
  const name = useProfileCardFormStore((state) => state.name);
  const birthday = useProfileCardFormStore((state) => state.birthday);
  const luckyNumber = useProfileCardFormStore((state) => state.luckyNumber);
  const tags = useProfileCardFormStore((state) => state.tags);
  const thumbnailUploadedUrl = useProfileCardFormStore(
    (state) => state.thumbnailUrl,
  );

  const formValue = {
    adminLabel,
    name,
    birthday,
    luckyNumber,
    tags,
    thumbnailUploadedUrl,
  };

  return <div>{JSON.stringify(formValue)}</div>;
};

export const ProfileCardFormPreview = () => {
  return (
    <>
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
      <FormValueStringifying />
    </>
  );
};
