"use client";

import type { FC } from "react";

import { NumberInput } from "@/common/components/form/number-input";

import { useProfileCardLuckyNumberInput } from "./hook";

export const ProfileCardLuckyNumberInput: FC = () => {
  const { value, setValue, errorMessages } = useProfileCardLuckyNumberInput();

  return (
    <NumberInput
      label="ラッキーナンバー"
      description="ラッキーナンバーを入力してください。"
      placeholder="0"
      required
      value={value}
      onChange={setValue}
      errorMessages={errorMessages}
    />
  );
};
