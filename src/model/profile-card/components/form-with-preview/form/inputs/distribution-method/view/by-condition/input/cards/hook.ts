import type { CheckboxGroupValue } from "@/common/components/form/checkbox-group/type";
import type { TriValueDistributionCondition } from "@/common/components/form/type";
import { useProfileCardFormStore } from "@/model/profile-card/components/form-with-preview/store/hook";

export const useProfileDistributionMethodByConditionInputCards = () => {
  // カードステータス選択ラジオボタンのprops
  const cardStatus = useProfileCardFormStore(
    (state) => state.profileDistributionMethodByConditionCardStatus,
  );
  const setCardStatus = useProfileCardFormStore(
    (state) => state.setProfileDistributionMethodByConditionCardStatus,
  );
  const setCardStatusAsRadioButtonValue = (value: string) => {
    setCardStatus(value as TriValueDistributionCondition);
  };

  // 「あり」が選択された場合のカード選択チェックボックスのprops
  const yesCardIds = useProfileCardFormStore(
    (state) => state.profileDistributionMethodByConditionYesCardIds,
  );
  const setYesCardIds = useProfileCardFormStore(
    (state) => state.setProfileDistributionMethodByConditionYesCardIds,
  );
  const setYesCardIdsAsCheckboxGroupValue = (value: string[]) => {
    setYesCardIds(value as CheckboxGroupValue);
  };

  // 「なし」が選択された場合のカード選択チェックボックスのprops
  const noCardIds = useProfileCardFormStore(
    (state) => state.profileDistributionMethodByConditionNoCardIds,
  );
  const setNoCardIds = useProfileCardFormStore(
    (state) => state.setProfileDistributionMethodByConditionNoCardIds,
  );
  const setNoCardIdsAsCheckboxGroupValue = (value: string[]) => {
    setNoCardIds(value as CheckboxGroupValue);
  };

  return {
    checkBoxProps: {
      yes: {
        value: yesCardIds,
        onChange: setYesCardIdsAsCheckboxGroupValue,
      },
      no: {
        value: noCardIds,
        onChange: setNoCardIdsAsCheckboxGroupValue,
      },
    },
    radioButtonProps: {
      value: cardStatus,
      onChange: setCardStatusAsRadioButtonValue,
    },
  };
};
