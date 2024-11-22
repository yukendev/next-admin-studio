import { useProfileCardFormStore } from "@/model/profile-card/components/form-with-preview/store/hook";

export const useProfileDistributionMethodIsStuff = () => {
  const isStuff = useProfileCardFormStore(
    (state) => state.distributionMethod.byCondition.isStuff,
  );
  const setIsStuff = useProfileCardFormStore(
    (state) => state.distributionMethod.byCondition.setIsStuff,
  );

  return { isStuff, setIsStuff };
};
