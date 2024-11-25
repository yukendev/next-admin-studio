import type { FormInputSliceCreater } from "@/model/common/types/form-input-slice";
import type { ProfileDistributionMethodInputType } from "./type";
import {
  type ProfileDistributionMethodByConditionInputSlice,
  type ProfileDistributionMethodByConditionSetterSlice,
  createProfileDistributionMethodByConditionInputSlice,
} from "./view/by-condition/slice";

export type DistributionMethodInputSlice = {
  distributionMethodType: ProfileDistributionMethodInputType;
} & ProfileDistributionMethodByConditionInputSlice;

export type DistributionMethodSetterSlice = {
  setDistributionMethodType: (
    distributionMethodType: ProfileDistributionMethodInputType,
  ) => void;
} & ProfileDistributionMethodByConditionSetterSlice;

export type DistributionMethodSlice = DistributionMethodInputSlice &
  DistributionMethodSetterSlice;

export const createDistributionMethodSlice: FormInputSliceCreater<
  DistributionMethodSlice,
  DistributionMethodInputSlice
> = (initialState) => (set, get, store) => ({
  // 配布方法
  distributionMethodType: initialState.distributionMethodType,

  // 配布方法のsetter
  setDistributionMethodType: (distributionMethodType) =>
    set({
      distributionMethodType: distributionMethodType,
    }),

  // 条件指定の配布方法
  ...createProfileDistributionMethodByConditionInputSlice(initialState)(
    set,
    get,
    store,
  ),
});
