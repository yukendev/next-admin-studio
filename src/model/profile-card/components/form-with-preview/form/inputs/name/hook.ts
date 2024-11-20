import { useProfileCardFormStore } from "../../../store/hook";

export const useProfileCardNameInput = () => {
  const value = useProfileCardFormStore((state) => state.name);
  const setValue = useProfileCardFormStore((state) => state.setName);
  const getErrorMessages = useProfileCardFormStore(
    (state) => state.getNameErrorMessages,
  );
  const errorMessages = getErrorMessages();

  return { value, setValue, errorMessages };
};
