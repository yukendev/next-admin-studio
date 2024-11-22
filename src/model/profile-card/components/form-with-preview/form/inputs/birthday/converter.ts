export const profileCardBirthdayConverter = {
  toClient: (value: string | null) => (value ? new Date(value) : null),
  toServer: (value: Date) => value.toISOString(),
};
