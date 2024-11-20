"use client";

import type { FC } from "react";

import { TextInput } from "@/common/components/form/text-input";

import { useProfileCardNameInput } from "./hook";

export const ProfileCardNameInput: FC = () => {
  const { value, setValue, errorMessages } = useProfileCardNameInput();

  return (
    <TextInput
      label="名前"
      description="名前を入力してください。"
      placeholder="名前"
      required
      value={value}
      setValue={setValue}
      errorMessages={errorMessages}
    />
  );
};
