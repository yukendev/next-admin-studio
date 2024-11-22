import type { TriValueDistributionCondition } from "@/common/components/form/type";

export const PROFILE_DISTRIBUTION_METHOD_BY_CONDITION_CARD_STATUS = {
  ANY: {
    VALUE: "ANY",
    LABEL: "絞り込まない",
  },
  YES: {
    VALUE: "YES",
    LABEL: "カードあり",
  },
  NO: {
    VALUE: "NO",
    LABEL: "カードなし",
  },
} satisfies Record<
  TriValueDistributionCondition,
  { VALUE: TriValueDistributionCondition; LABEL: string }
>;

export const PROFILE_DISTRIBUTION_METHOD_BY_CONDITION_CARD_STATUS_OPTIONS = [
  {
    value: PROFILE_DISTRIBUTION_METHOD_BY_CONDITION_CARD_STATUS.ANY.VALUE,
    label: PROFILE_DISTRIBUTION_METHOD_BY_CONDITION_CARD_STATUS.ANY.LABEL,
  },
  {
    value: PROFILE_DISTRIBUTION_METHOD_BY_CONDITION_CARD_STATUS.YES.VALUE,
    label: PROFILE_DISTRIBUTION_METHOD_BY_CONDITION_CARD_STATUS.YES.LABEL,
  },
  {
    value: PROFILE_DISTRIBUTION_METHOD_BY_CONDITION_CARD_STATUS.NO.VALUE,
    label: PROFILE_DISTRIBUTION_METHOD_BY_CONDITION_CARD_STATUS.NO.LABEL,
  },
];

export const PROFILE_DISTRIBUTION_METHOD_BY_CONDITION_CARD_OPTIONS = [
  {
    value: "1",
    label: "カード1",
  },
  {
    value: "2",
    label: "カード2",
  },
  {
    value: "3",
    label: "カード3",
  },
];
