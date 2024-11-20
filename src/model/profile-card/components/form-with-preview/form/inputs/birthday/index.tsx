"use client";

import type { FC } from "react";

import { DateField } from "@/common/components/form/date-field";
import { useProfileCardBirthdayInput } from "./hook";

export const ProfileCardBirthdayInput: FC = () => {
  const { setValue, errorMessages } = useProfileCardBirthdayInput();

  return (
    <DateField
      label="誕生日"
      description="誕生日を入力してください。"
      required
      onChange={setValue}
      errorMessages={errorMessages}
    />
  );
};
