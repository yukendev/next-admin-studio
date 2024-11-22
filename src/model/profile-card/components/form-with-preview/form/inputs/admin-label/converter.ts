import { PROFILE_CARD_ADMIN_LABEL_DEFAULT_VALUE } from "./const";

export const profileCardAdminLabelConverter = {
  toClient: (value: string | undefined) =>
    value ?? PROFILE_CARD_ADMIN_LABEL_DEFAULT_VALUE,
  toServer: (value: string) => value,
};
