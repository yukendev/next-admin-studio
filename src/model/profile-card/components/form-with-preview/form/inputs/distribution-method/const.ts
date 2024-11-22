export const PROFILE_DISTRIBUTUIN_METHOD = {
  ALL_USERS: {
    VALUE: "all",
    LABEL: "全員に配布",
  },
  MEMBER_USERS_BY_CONDITIONS: {
    VALUE: "conditional",
    LABEL: "会員ユーザーに条件を指定して配布",
  },
  MEMBER_USERS_BY_MEMBER_INTEGRATION_ID: {
    VALUE: "id-specified",
    LABEL: "会員ユーザーに会員統合 ID を指定して配布",
  },
  MEMBER_USERS_BY_URL: {
    VALUE: "qr-url",
    LABEL: "会員ユーザーに二次元コード・URLで配布",
  },
} as const;

export const PROFILE_DISTRIBUTION_METHOD_OPTIONS = [
  {
    label: PROFILE_DISTRIBUTUIN_METHOD.ALL_USERS.LABEL,
    value: PROFILE_DISTRIBUTUIN_METHOD.ALL_USERS.VALUE,
  },
  {
    label: PROFILE_DISTRIBUTUIN_METHOD.MEMBER_USERS_BY_CONDITIONS.LABEL,
    value: PROFILE_DISTRIBUTUIN_METHOD.MEMBER_USERS_BY_CONDITIONS.VALUE,
  },
  {
    label:
      PROFILE_DISTRIBUTUIN_METHOD.MEMBER_USERS_BY_MEMBER_INTEGRATION_ID.LABEL,
    value:
      PROFILE_DISTRIBUTUIN_METHOD.MEMBER_USERS_BY_MEMBER_INTEGRATION_ID.VALUE,
  },

  {
    label: PROFILE_DISTRIBUTUIN_METHOD.MEMBER_USERS_BY_URL.LABEL,
    value: PROFILE_DISTRIBUTUIN_METHOD.MEMBER_USERS_BY_URL.VALUE,
  },
] as const;

export type ProfileDistributionMethodType = typeof PROFILE_DISTRIBUTUIN_METHOD;

export type ProfileDistributionMethod =
  ProfileDistributionMethodType[keyof ProfileDistributionMethodType]["VALUE"];
