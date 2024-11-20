import { useProfileCardFormStore } from "../../../store";

export const useProfileCardTagsInput = () => {
  const value = useProfileCardFormStore((state) => state.tags);
  const setValue = useProfileCardFormStore((state) => state.setTags);
  const getErrorMessages = useProfileCardFormStore(
    (state) => state.getTagsErrorMessages,
  );
  const errorMessages = getErrorMessages();

  return { value, setValue, errorMessages };
};
