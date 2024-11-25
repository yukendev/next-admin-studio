import type { FormInputSliceCreater } from "@/model/common/types/form-input-slice";
import {
  type ProfileDistributionMethodByConditionCardsInputSlice,
  type ProfileDistributionMethodByConditionCardsSetterSlice,
  createProfileDistributionMethodByConditionCardsSlice,
} from "./input/cards/slice";
import {
  type ProfileDistributionMethodByConditionIsStuffInputSlice,
  type ProfileDistributionMethodByConditionIsStuffSetterSlice,
  createProfileDistributionMethodByConditionIsStuffSlice,
} from "./input/is-stuff/slice";

// 「条件を指定して配布」のフォームで入力される値
export type ProfileDistributionMethodByConditionInputSlice =
  ProfileDistributionMethodByConditionCardsInputSlice &
    ProfileDistributionMethodByConditionIsStuffInputSlice;

// 「条件を指定して配布」のフォームで入力される値のsetter
export type ProfileDistributionMethodByConditionSetterSlice =
  ProfileDistributionMethodByConditionCardsSetterSlice &
    ProfileDistributionMethodByConditionIsStuffSetterSlice;

// store全体で管理するプロパティ
export type ProfileDistributionMethodByConditionSlice =
  ProfileDistributionMethodByConditionInputSlice &
    ProfileDistributionMethodByConditionSetterSlice;

// storeを作成する関数
export const createProfileDistributionMethodByConditionInputSlice: FormInputSliceCreater<
  ProfileDistributionMethodByConditionSlice,
  ProfileDistributionMethodByConditionInputSlice
> = (initialState) => (set, get, store) => ({
  // 職員選択ラジオボタンのstoreを作成
  ...createProfileDistributionMethodByConditionIsStuffSlice(initialState)(
    set,
    get,
    store,
  ),
  // カード選択のstoreを作成
  ...createProfileDistributionMethodByConditionCardsSlice(initialState)(
    set,
    get,
    store,
  ),
});
