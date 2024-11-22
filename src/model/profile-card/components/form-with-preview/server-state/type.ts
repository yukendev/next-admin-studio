export type ProfileCardFormServerState = {
  id: string;
  adminLabel: string;
  birthday: string | null;
  luckyNumber: number;
  name: string;
  tags: string[];
  creationStatus: "DRAFT" | "CONFIRMED";
  thumbnailUrl: string | null;
};
