import type { FormInputSliceCreater } from "@/model/common/types/form-input-slice";
import type { ProfileCardForm } from "@/model/profile-card/components/form-with-preview/store/type";
import {
  type ProfileDistributionMethodByConditionInputCardsSlice,
  createProfileDistributionMethodByConditionInputCardsSlice,
} from "./input/cards/slice";
import {
  type ProfileDistributionMethodByConditionInputIsStuffSlice,
  createProfileDistributionMethodByConditionInputIsStuffSlice,
} from "./input/is-stuff/slice";

export type ProfileDistributionMethodByConditionInputSlice =
  ProfileDistributionMethodByConditionInputCardsSlice &
    ProfileDistributionMethodByConditionInputIsStuffSlice;

export const createProfileDistributionMethodByConditionInputSlice: FormInputSliceCreater<
  ProfileDistributionMethodByConditionInputSlice,
  Pick<
    ProfileCardForm,
    "distributionMethod"
  >["distributionMethod"]["conditional"]
> = (initialState) => (set, get, store) => ({
  ...createProfileDistributionMethodByConditionInputIsStuffSlice(
    initialState.isStuff,
  )(set, get, store),
  ...createProfileDistributionMethodByConditionInputCardsSlice(
    initialState.cards,
  )(set, get, store),
});
