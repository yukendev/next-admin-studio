import type { TriValueDistributionCondition } from "@/common/components/form/type";

export const PROFILE_DISTRIBUTION_METHOD_IS_STUFF_STATUS = {
  ANY: { VALUE: "ANY", LABEL: "絞り込まない" },
  YES: {
    VALUE: "YES",
    LABEL: "該当する",
  },
  NO: {
    VALUE: "NO",
    LABEL: "該当しない",
  },
} satisfies Record<
  TriValueDistributionCondition,
  { VALUE: TriValueDistributionCondition; LABEL: string }
>;

export const PROFILE_DISTRIBUTION_METHOD_IS_STUFF_OPTIONS = [
  {
    value: PROFILE_DISTRIBUTION_METHOD_IS_STUFF_STATUS.ANY.VALUE,
    label: PROFILE_DISTRIBUTION_METHOD_IS_STUFF_STATUS.ANY.LABEL,
  },
  {
    value: PROFILE_DISTRIBUTION_METHOD_IS_STUFF_STATUS.YES.VALUE,
    label: PROFILE_DISTRIBUTION_METHOD_IS_STUFF_STATUS.YES.LABEL,
  },
  {
    value: PROFILE_DISTRIBUTION_METHOD_IS_STUFF_STATUS.NO.VALUE,
    label: PROFILE_DISTRIBUTION_METHOD_IS_STUFF_STATUS.NO.LABEL,
  },
];
