"use client";

import { Button } from "@mantine/core";
import { useRouter } from "next/navigation";
import type { FormEventHandler } from "react";

import { createSerializer } from "nuqs";
import { useProfileCardSearchStore } from "./hook";
import { FreeWordFormInput } from "./input/free-word";
import { StoreCodeFormInput } from "./input/store-code";
import { profileCardSearchParams } from "./params";

export const profileCardSearchParamsSerializer = createSerializer(
  profileCardSearchParams,
);

export const ProfileCardSearchView = () => {
  const router = useRouter();
  const freeWord = useProfileCardSearchStore((state) => state.freeWord);
  const storeCode = useProfileCardSearchStore((state) => state.storeCode);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    // シリアライザーでパース
    const paramsString = profileCardSearchParamsSerializer({
      freeWord: freeWord === "" ? undefined : freeWord,
      storeCode: storeCode.length === 0 ? undefined : storeCode,
    });

    // router.push
    router.push(`/profile-cards${paramsString}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FreeWordFormInput />
      <StoreCodeFormInput />

      <Button type="submit">検索</Button>
    </form>
  );
};
