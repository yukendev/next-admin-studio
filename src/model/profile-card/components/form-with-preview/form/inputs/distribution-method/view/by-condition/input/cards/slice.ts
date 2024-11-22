import type { TriValueDistributionCondition } from "@/common/components/form/type";

export type ProfileDistributionMethodByConditionInputCardsSlice = {
  // 「あり」「なし」「絞り込まない」の値を管理
  cardStatus: TriValueDistributionCondition | null;
  setCardStatus: (cardStatus: TriValueDistributionCondition) => void;

  // 「あり」の場合のカードIDの配列を管理
  yesCardIds: string[];
  setYesCardIds: (cardIds: string[]) => void;

  // 「なし」の場合のカードIDの配列を管理
  noCardIds: string[];
  setNoCardIds: (cardIds: string[]) => void;

  // エラーメッセージを管理
  errorMessages: string[];
  setErrorMessages: (errorMessages: string[]) => void;
};

export const createProfileDistributionMethodByConditionInputCardsSlice = (
  initialState: ProfileDistributionMethodByConditionInputCardsSlice,
): ProfileDistributionMethodByConditionInputCardsSlice => ({
  cardStatus: initialState.cardStatus,
  setCardStatus: initialState.setCardStatus,
  yesCardIds: initialState.yesCardIds,
  setYesCardIds: initialState.setYesCardIds,
  noCardIds: initialState.noCardIds,
  setNoCardIds: initialState.setNoCardIds,
  errorMessages: initialState.errorMessages,
  setErrorMessages: initialState.setErrorMessages,
});
