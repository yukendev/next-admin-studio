export const profileCardTagsConverter = {
  toClient: (value: string[] | undefined | null) => value ?? [],
  toServer: (value: string[] | undefined | null) => value ?? [],
};
