export const profileCardBirthdayConverter = {
  toClient: (value: string | undefined | null) =>
    value ? new Date(value) : null,
  toServer: (value: Date | undefined) => value?.toISOString(),
};
