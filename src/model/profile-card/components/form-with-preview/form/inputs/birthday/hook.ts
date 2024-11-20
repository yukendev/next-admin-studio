import { useProfileCardFormStore } from "../../../store";

export const useProfileCardBirthdayInput = () => {
  const value = useProfileCardFormStore((state) => state.birthday);
  const setValue = useProfileCardFormStore((state) => state.setBirthday);
  const getErrorMessages = useProfileCardFormStore(
    (state) => state.getBirthdayErrorMessages,
  );

  const errorMessages = getErrorMessages();

  return { value, setValue, errorMessages };
};
