import { useProfileCardFormStore } from "@/model/profile-card/components/form-with-preview/store/hook";

export const useProfileDistributionMethodByConditionInputCards = () => {
  const cardStatus = useProfileCardFormStore(
    (state) => state.distributionMethod.byCondition.cardStatus,
  );
  const setCardStatus = useProfileCardFormStore(
    (state) => state.distributionMethod.byCondition.setCardStatus,
  );

  const yesCardIds = useProfileCardFormStore(
    (state) => state.distributionMethod.byCondition.yesCardIds,
  );
  const setYesCardIds = useProfileCardFormStore(
    (state) => state.distributionMethod.byCondition.setYesCardIds,
  );
  const noCardIds = useProfileCardFormStore(
    (state) => state.distributionMethod.byCondition.noCardIds,
  );
  const setNoCardIds = useProfileCardFormStore(
    (state) => state.distributionMethod.byCondition.setNoCardIds,
  );
  const errorMessages = useProfileCardFormStore(
    (state) => state.distributionMethod.byCondition.errorMessages,
  );

  return {
    checkBoxProps: {
      yes: {
        value: yesCardIds,
        onChange: setYesCardIds,
      },
      no: {
        value: noCardIds,
        onChange: setNoCardIds,
      },
    },
    radioButtonProps: {
      value: cardStatus,
      onChange: setCardStatus,
    },
    errorMessages,
  };
};
