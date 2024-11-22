import type { ProfileCardForm } from "../store/type";
import { PROFILE_CARD_ADMIN_LABEL_DEFAULT_VALUE } from "./inputs/admin-label/const";
import { PROFILE_CARD_BIRTHDAY_DEFAULT_VALUE } from "./inputs/birthday/const";
import { PROFILE_CARD_LUCKY_NUMBER_DEFAULT_VALUE } from "./inputs/lucky-number/const";
import { PROFILE_CARD_NAME_DEFAULT_VALUE } from "./inputs/name/const";
import { PROFILE_CARD_TAGS_DEFAULT_VALUE } from "./inputs/tags/const";
import { PROFILE_CARD_THUMBNAIL_URL_DEFAULT_VALUE } from "./inputs/thumbnail-url/const";

export const PROFILE_FORM_DEFAULT_VALUE_FOR_NEW: ProfileCardForm = {
  id: "new",
  adminLabel: PROFILE_CARD_ADMIN_LABEL_DEFAULT_VALUE,
  birthday: PROFILE_CARD_BIRTHDAY_DEFAULT_VALUE,
  luckyNumber: PROFILE_CARD_LUCKY_NUMBER_DEFAULT_VALUE,
  name: PROFILE_CARD_NAME_DEFAULT_VALUE,
  tags: PROFILE_CARD_TAGS_DEFAULT_VALUE,
  thumbnailUrl: PROFILE_CARD_THUMBNAIL_URL_DEFAULT_VALUE,
  distributionMethod: PROFILE_DISTRIBUTION_METHOD_DEFAULT_VALUE,
};
