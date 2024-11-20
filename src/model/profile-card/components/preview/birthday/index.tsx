import { formatDate } from "@/common/lib/format-date";
import { Text } from "@mantine/core";

export const ProfileCardBirthdayPreviewView = ({
  value,
}: { value: Date | null }) => {
  if (!value) return null;
  return <Text>{formatDate(value, "YYYY/MM/DD")}</Text>;
};
