import type { CheckboxGroupValue } from "@/common/components/form/checkbox-group/type";
import type { TriValueDistributionCondition } from "@/common/components/form/type";
import type { FormInputSliceCreater } from "@/model/common/types/form-input-slice";

// カード選択のフォームで入力される値
export type ProfileDistributionMethodByConditionCardsInputSlice = {
  // 「あり」「なし」「絞り込まない」の値を管理
  profileDistributionMethodByConditionCardStatus: TriValueDistributionCondition;
  // 「あり」の場合のカードIDを管理
  profileDistributionMethodByConditionYesCardIds: CheckboxGroupValue;
  // 「なし」の場合のカードIDを管理
  profileDistributionMethodByConditionNoCardIds: CheckboxGroupValue;
};

// カード選択のフォームで入力される値を更新するためのsetter
export type ProfileDistributionMethodByConditionCardsSetterSlice = {
  setProfileDistributionMethodByConditionCardStatus: (
    cardStatus: TriValueDistributionCondition,
  ) => void;

  setProfileDistributionMethodByConditionYesCardIds: (
    yesCardIds: CheckboxGroupValue,
  ) => void;

  setProfileDistributionMethodByConditionNoCardIds: (
    noCardIds: CheckboxGroupValue,
  ) => void;
};

// store全体で管理するプロパティ
export type ProfileDistributionMethodByConditionCardsSlice =
  ProfileDistributionMethodByConditionCardsInputSlice &
    ProfileDistributionMethodByConditionCardsSetterSlice;

// storeを作成する関数
export const createProfileDistributionMethodByConditionCardsSlice: FormInputSliceCreater<
  ProfileDistributionMethodByConditionCardsSlice,
  ProfileDistributionMethodByConditionCardsInputSlice
> = (initialState) => (set) => ({
  // 初期値をセット
  profileDistributionMethodByConditionCardStatus:
    initialState.profileDistributionMethodByConditionCardStatus,
  profileDistributionMethodByConditionYesCardIds:
    initialState.profileDistributionMethodByConditionYesCardIds,
  profileDistributionMethodByConditionNoCardIds:
    initialState.profileDistributionMethodByConditionNoCardIds,

  // setterを定義
  setProfileDistributionMethodByConditionCardStatus: (status) =>
    set({
      profileDistributionMethodByConditionCardStatus: status,
    }),
  setProfileDistributionMethodByConditionYesCardIds: (yesCardIds) =>
    set({
      profileDistributionMethodByConditionYesCardIds: yesCardIds,
    }),
  setProfileDistributionMethodByConditionNoCardIds: (noCardIds) =>
    set({
      profileDistributionMethodByConditionNoCardIds: noCardIds,
    }),
});
