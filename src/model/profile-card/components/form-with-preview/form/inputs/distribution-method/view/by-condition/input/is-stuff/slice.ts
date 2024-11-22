import type { TriValueDistributionCondition } from "@/common/components/form/type";
import type { FormInputSliceCreater } from "@/model/common/types/form-input-slice";

type ProfileDistributionMethodByConditionInputIsStuffValue =
  TriValueDistributionCondition;

export type ProfileDistributionMethodByConditionInputIsStuffSlice = {
  // 「あり」「なし」「絞り込まない」の値を管理
  isStuff: ProfileDistributionMethodByConditionInputIsStuffValue;
  setIsStuff: (isStuff: TriValueDistributionCondition) => void;
};

export const createProfileDistributionMethodByConditionInputIsStuffSlice: FormInputSliceCreater<
  ProfileDistributionMethodByConditionInputIsStuffSlice,
  ProfileDistributionMethodByConditionInputIsStuffValue
> = (initialState) => (set, _get) => ({
  isStuff: initialState,
  setIsStuff: (isStuff) => set({ isStuff }),
});
