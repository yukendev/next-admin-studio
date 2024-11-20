import { Box, Flex, ScrollArea, SimpleGrid, Text } from "@mantine/core";
import { ProfileCardForm } from "./form";
import { ProfileCardFormPreview } from "./preview";

export const ProfileCardFormWithPreview = () => {
  return (
    <SimpleGrid cols={2}>
      <ScrollArea py="md" px="xl" className="h-[calc(100vh-60px)]">
        <Box component="div" mt="md" mb="xl">
          {/* <RewardDetailBreadcrumbs id={id} /> */}
        </Box>

        <Flex justify="center" align="center" direction="column" gap="sm">
          {/* {isOpen ? <AlertForOpenContentForm /> : <Space h={36} />} */}
          <ProfileCardFormPreview />
          <Text c="gray" size="sm">
            プレビューは実際の見た目とは異なる可能性があります
          </Text>
        </Flex>
      </ScrollArea>

      <ProfileCardForm />
    </SimpleGrid>
  );
};
