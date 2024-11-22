import type { CheckboxGroupValue } from "@/common/components/form/checkbox-group/type";
import type { TriValueDistributionCondition } from "@/common/components/form/type";
import type { FormInputSliceCreater } from "@/model/common/types/form-input-slice";

type ProfileDistributionMethodByConditionInputCardsValue = {
  cardStatus: TriValueDistributionCondition;
  yesCardIds: CheckboxGroupValue;
  noCardIds: CheckboxGroupValue;
};

export type ProfileDistributionMethodByConditionInputCardsSlice = {
  // 「あり」「なし」「絞り込まない」の値を管理
  cards: ProfileDistributionMethodByConditionInputCardsValue;
  setCards: (
    cards: ProfileDistributionMethodByConditionInputCardsValue,
  ) => void;

  // エラーメッセージを管理
  // errorMessages: string[];
  // setErrorMessages: (errorMessages: string[]) => void;
};

export const createProfileDistributionMethodByConditionInputCardsSlice: FormInputSliceCreater<
  ProfileDistributionMethodByConditionInputCardsSlice,
  ProfileDistributionMethodByConditionInputCardsValue
> = (initialState) => (set, _get) => ({
  cards: initialState,

  setCards: (cards) => set({ cards }),
  // setErrorMessages: (errorMessages) => set({ errorMessages }),
});
