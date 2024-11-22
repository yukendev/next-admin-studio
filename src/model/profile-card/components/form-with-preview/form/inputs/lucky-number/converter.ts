export const profileCardLuckyNumberConverter = {
  toClient: (value: number | undefined | null) => value ?? 0,
  toServer: (value: number | undefined | null) => value ?? 0,
};
