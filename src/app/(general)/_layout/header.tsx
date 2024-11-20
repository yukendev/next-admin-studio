import { Flex, Text } from "@mantine/core";

import { ENV_CLIENT } from "@/env/client";

export const Header = () => {
  return (
    <Flex justify="space-between" align="center" py="xs" px="md">
      <Text>{ENV_CLIENT.NEXT_PUBLIC_APP_TITLE}</Text>
    </Flex>
  );
};
