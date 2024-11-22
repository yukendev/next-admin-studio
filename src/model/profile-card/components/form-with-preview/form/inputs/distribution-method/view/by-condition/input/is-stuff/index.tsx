import { RadioButtonGroup } from "@/common/components/form/radio-button-group";

import { PROFILE_DISTRIBUTION_METHOD_IS_STUFF_OPTIONS } from "./const";
import { useProfileDistributionMethodIsStuff } from "./hook";

export const ProfileDistributionMethodIsStuff = () => {
  const { isStuff, setIsStuff } = useProfileDistributionMethodIsStuff();
  return (
    <RadioButtonGroup
      label="職員"
      description="職員かどうかで絞り込みます。"
      value={isStuff}
      onChange={setIsStuff}
      options={PROFILE_DISTRIBUTION_METHOD_IS_STUFF_OPTIONS}
    />
  );
};
