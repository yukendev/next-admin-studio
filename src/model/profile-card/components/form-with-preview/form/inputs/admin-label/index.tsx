"use client";

import type { FC } from "react";

import { TextInput } from "@/common/components/form/text-input";

import { useProfileCardAdminLabelInput } from "./hook";

export const ProfileCardAdminLabelInput: FC = () => {
  const { value, setValue, errorMessages } = useProfileCardAdminLabelInput();

  return (
    <TextInput
      label="管理名称"
      description="管理画面上での識別のためのラベルです。"
      placeholder="管理名称"
      value={value}
      setValue={setValue}
      disabled={false}
      errorMessages={errorMessages}
    />
  );
};
