import type { TriValueDistributionCondition } from "@/common/components/form/type";
import type { FormInputSliceCreater } from "@/model/common/types/form-input-slice";

// 職員選択ラジオボタンのステート
export type ProfileDistributionMethodByConditionIsStuffInputSlice = {
  profileDistributionMethodByConditionIsStuff: TriValueDistributionCondition;
};

// 職員選択ラジオボタンのsetterステート
export type ProfileDistributionMethodByConditionIsStuffSetterSlice = {
  setProfileDistributionMethodByConditionIsStuff: (
    isStuff: TriValueDistributionCondition,
  ) => void;
};

// store全体で管理するプロパティ
export type ProfileDistributionMethodByConditionIsStuffSlice =
  ProfileDistributionMethodByConditionIsStuffInputSlice &
    ProfileDistributionMethodByConditionIsStuffSetterSlice;

// storeを作成する関数
export const createProfileDistributionMethodByConditionIsStuffSlice: FormInputSliceCreater<
  ProfileDistributionMethodByConditionIsStuffSlice,
  ProfileDistributionMethodByConditionIsStuffInputSlice
> = (initialState) => (set, _get) => ({
  // 初期値をセット
  profileDistributionMethodByConditionIsStuff:
    initialState.profileDistributionMethodByConditionIsStuff,

  // setterを定義
  setProfileDistributionMethodByConditionIsStuff: (isStuff) =>
    set({ profileDistributionMethodByConditionIsStuff: isStuff }),
});
