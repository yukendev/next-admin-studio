import { Checkbox, Group } from "@mantine/core";
import { useProfileCardSearchStore } from "../../hook";

export const StoreCodeFormInput = () => {
  const storeCode = useProfileCardSearchStore((state) => state.storeCode);
  const setStoreCode = useProfileCardSearchStore((state) => state.setStoreCode);

  return (
    <Checkbox.Group
      value={storeCode}
      onChange={(value) => setStoreCode(value)}
      label="店舗"
      withAsterisk
    >
      <Group mt="xs">
        <Checkbox value="0001" label="店舗1" />
        <Checkbox value="0002" label="店舗2" />
        <Checkbox value="0003" label="店舗3" />
        <Checkbox value="0004" label="店舗4" />
      </Group>
    </Checkbox.Group>
  );
};
