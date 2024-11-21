import { Stack } from "@mantine/core";
import Link from "next/link";
import type { SearchParams } from "nuqs";

import { ProfileCardSearchView } from "@/model/profile-card/components/search";
import { profileCardSearchParams } from "@/model/profile-card/components/search/params";
import { ProfileCardSearchStoreProvider } from "@/model/profile-card/components/search/provider";
import { createSearchParamsCache } from "nuqs/server";

type PageProps = {
  searchParams: Promise<SearchParams>;
};

export const profileCardSearchParamsCache = createSearchParamsCache(
  profileCardSearchParams,
);

export default async function ProfileCardListPage({ searchParams }: PageProps) {
  const profileCardSearchParams =
    await profileCardSearchParamsCache.parse(searchParams);

  return (
    <Stack>
      <Link href="/profile-cards/1">詳細へ</Link>
      <Link href="/profile-cards/new">新規作成へ</Link>
      <ProfileCardSearchStoreProvider initialState={profileCardSearchParams}>
        <ProfileCardSearchView />
      </ProfileCardSearchStoreProvider>
    </Stack>
  );
}
