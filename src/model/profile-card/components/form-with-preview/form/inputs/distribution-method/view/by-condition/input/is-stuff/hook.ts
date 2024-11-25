import type { TriValueDistributionCondition } from "@/common/components/form/type";
import { useProfileCardFormStore } from "@/model/profile-card/components/form-with-preview/store/hook";

export const useProfileDistributionMethodIsStuff = () => {
  const isStuff = useProfileCardFormStore(
    (state) => state.profileDistributionMethodByConditionIsStuff,
  );
  const setIsStuff = useProfileCardFormStore(
    (state) => state.setProfileDistributionMethodByConditionIsStuff,
  );
  const setIsStuffAsTriValueDistributionCondition = (value: string) => {
    setIsStuff(value as TriValueDistributionCondition);
  };
  return {
    isStuff,
    setIsStuff: setIsStuffAsTriValueDistributionCondition,
  };
};
