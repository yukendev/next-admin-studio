import { Divider, Flex, Title } from "@mantine/core";
import type { FC } from "react";

import { FormMenuButton } from "@/model/common/components/form-menu";

export const ProfileCardFormHeader: FC = () => {
  return (
    <>
      <Flex justify="space-between" align="center" p="lg">
        <Title order={3}>プロフィールカード 詳細</Title>
        <FormMenuButton
          // TODO: 実装
          onDelete={() => {}}
          onReset={() => {}}
          isDeletable={false}
        />
      </Flex>
      <Divider />
    </>
  );
};
