import { useProfileCardFormStore } from "../../../store";

export const useProfileCardAdminLabelInput = () => {
  const value = useProfileCardFormStore((state) => state.adminLabel);
  const setValue = useProfileCardFormStore((state) => state.setAdminLabel);
  const getErrorMessages = useProfileCardFormStore(
    (state) => state.getAdminLabelErrorMessages,
  );

  const errorMessages = getErrorMessages();

  return { value, setValue, errorMessages };
};
