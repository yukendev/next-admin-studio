"use client";

import { Button, Stack } from "@mantine/core";
import { useRouter } from "next/navigation";
import { createSerializer } from "nuqs";
import { useProfileCardSearchStore } from "./hook";
import { FreeWordFormInput } from "./input/free-word";
import { StoreCodeFormInput } from "./input/store-code";
import { profileCardSearchParams } from "./params";

export const profileCardSearchParamsSerializer = createSerializer(
  profileCardSearchParams,
);

const SearchButton = () => {
  const router = useRouter();
  const freeWord = useProfileCardSearchStore((state) => state.freeWord);
  const storeCode = useProfileCardSearchStore((state) => state.storeCode);

  const handleSubmit = () => {
    // シリアライザーでパース
    const paramsString = profileCardSearchParamsSerializer({
      freeWord: freeWord === "" ? undefined : freeWord,
      storeCode: storeCode.length === 0 ? undefined : storeCode,
    });

    // router.push
    router.push(`/profile-cards${paramsString}`);
  };
  return <Button onClick={handleSubmit}>検索</Button>;
};

export const ProfileCardSearchView = () => {
  return (
    <Stack>
      <FreeWordFormInput />
      <StoreCodeFormInput />

      <SearchButton />
    </Stack>
  );
};
