"use client";

import { Stack } from "@mantine/core";
import { useProfileCardFormStore } from "../store/hook";
import { ProfileCardBirthdayPreviewContainer } from "./birthday";
import { ProfileCardLuckyNumberPreviewContainer } from "./lucky-number";
import { ProfileCardNamePreviewContainer } from "./name";
import { ProfileCardTagsPreviewContainer } from "./tags";

// フォームの値を可視化するためだけのコンポーネント
const FormValueStringifying = () => {
  const state = useProfileCardFormStore((state) => state);
  // const name = useProfileCardFormStore((state) => state.name);
  // const birthday = useProfileCardFormStore((state) => state.birthday);
  // const luckyNumber = useProfileCardFormStore((state) => state.luckyNumber);
  // const tags = useProfileCardFormStore((state) => state.tags);
  // const thumbnailUploadedUrl = useProfileCardFormStore(
  //   (state) => state.thumbnailUrl,
  // );
  // const distributionMethodType = useProfileCardFormStore((state) => ({
  //   type: state.distributionMethodType,
  //   byConditionCardStatus: state.profileDistributionMethodByConditionCardStatus,
  // }));

  // const formValue = {
  //   adminLabel,
  //   name,
  //   birthday,
  //   luckyNumber,
  //   tags,
  //   thumbnailUploadedUrl,
  // };

  console.info(JSON.stringify(state));
  return <div className="fixed w-[700px]">{JSON.stringify(state)}</div>;
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
