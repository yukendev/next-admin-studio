import { Stack } from "@mantine/core";
import Link from "next/link";

export default function ProfileCardListPage() {
  return (
    <Stack>
      <Link href="/profile-cards/1">詳細へ</Link>
      <Link href="/profile-cards/new">新規作成へ</Link>
    </Stack>
  );
}
