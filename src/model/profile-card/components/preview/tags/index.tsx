import { Text } from "@mantine/core";

export const ProfileCardTagsPreviewView = ({ value }: { value: string[] }) => {
  return <Text>{value.join(", ")}</Text>;
};
