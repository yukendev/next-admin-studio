import { TextInput } from "@mantine/core";
import { useProfileCardSearchStore } from "../../hook";

export const FreeWordFormInput = () => {
  const freeWord = useProfileCardSearchStore((state) => state.freeWord);
  const setFreeWord = useProfileCardSearchStore((state) => state.setFreeWord);

  return (
    <TextInput
      label="フリーワード"
      placeholder="フリーワード"
      value={freeWord}
      onChange={(event) => setFreeWord(event.currentTarget.value)}
    />
  );
};
