import { useProfileCardFormStore } from "../../../store/hook";
import type { ProfileDistributionMethodInputType } from "./type";

export const useProfileDistributionMethod = () => {
  const value = useProfileCardFormStore(
    (state) => state.distributionMethodType,
  );
  const onChange = useProfileCardFormStore(
    (state) => state.setDistributionMethodType,
  );
  const onChangeAsProfileDistributionMethod = (
    distributionMethodType: string | null,
  ) => onChange(distributionMethodType as ProfileDistributionMethodInputType);

  return { value, onChange: onChangeAsProfileDistributionMethod };
};
