"use client";

import type { FC } from "react";

import { TagsInput } from "@/common/components/form/tags-input";
import { useProfileCardTagsInput } from "./hook";

export const ProfileCardTagsInput: FC = () => {
  const { value, setValue, errorMessages } = useProfileCardTagsInput();

  return (
    <TagsInput
      label="タグ"
      description="興味分野など、関連事項をタグとして入力してください。"
      value={value}
      onChange={setValue}
      errorMessages={errorMessages}
    />
  );
};
