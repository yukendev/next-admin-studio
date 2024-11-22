import type { ProfileCardFormServerState } from "../server-state/type";

export const PROFILE_CARD_MOCK_DATA: ProfileCardFormServerState[] = [
  {
    id: "1",
    adminLabel: "1つめのプロフィールカード",
    birthday: new Date().toISOString(),
    creationStatus: "DRAFT",
    luckyNumber: 1,
    name: "テストユーザー1",
    tags: ["タグ1", "タグ2", "タグ3"],
    thumbnailUrl: "https://example.com/thumbnail.jpg",
  },
  {
    id: "2",
    adminLabel: "2つめのプロフィールカード",
    birthday: new Date().toISOString(),
    creationStatus: "CONFIRMED",
    luckyNumber: 2,
    name: "テストユーザー2",
    tags: ["タグ4", "タグ5", "タグ6"],
    thumbnailUrl: "https://example.com/thumbnail.jpg",
  },
];

export const getProfileCard = async (
  id: string,
): Promise<ProfileCardFormServerState | undefined> => {
  const profileCard = PROFILE_CARD_MOCK_DATA.find(
    (profileCard) => profileCard.id === id,
  );

  return profileCard;
};
