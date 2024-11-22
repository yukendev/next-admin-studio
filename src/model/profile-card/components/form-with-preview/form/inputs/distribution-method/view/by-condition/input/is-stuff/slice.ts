import type { TriValueDistributionCondition } from "@/common/components/form/type";

export type ProfileDistributionMethodByConditionInputIsStuffSlice = {
  // 「あり」「なし」「絞り込まない」の値を管理
  isStuff: TriValueDistributionCondition | null;
  setIsStuff: (isStuff: TriValueDistributionCondition) => void;
};

export const createProfileDistributionMethodByConditionInputIsStuffSlice = (
  initialState: ProfileDistributionMethodByConditionInputIsStuffSlice,
): ProfileDistributionMethodByConditionInputIsStuffSlice => ({
  isStuff: initialState.isStuff,
  setIsStuff: initialState.setIsStuff,
});
