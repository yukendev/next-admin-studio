import { ActionIcon, Menu, Text, rem } from "@mantine/core";
import { IconDotsVertical, IconRefresh, IconTrash } from "@tabler/icons-react";
import type { FC } from "react";

import { openConfirmModal } from "@/common/lib/modal";

const MODAL_PROPS = {
  ON_DELETE: {
    title: <Text fw="bold">下書きを削除しますか？</Text>,
    children: <Text>削除したら復元することはできません👷🏻‍♂️</Text>,
    labels: { confirm: "削除", cancel: "キャンセル" },
    confirmProps: { color: "red" },
    centered: true,
  },
  ON_RESET: {
    title: <Text fw="bold">フォームをリセットしますか？</Text>,
    children: (
      <Text>
        編集前の状態に戻します。新たに入力した内容は失われてしまいます📄
      </Text>
    ),
    labels: { confirm: "リセット", cancel: "キャンセル" },
    centered: true,
  },
};

type Props = {
  onDelete: () => void;
  onReset: () => void;
  isDeletable: boolean;
};

export const FormMenuButton: FC<Props> = ({
  onDelete,
  onReset,
  isDeletable,
}) => {
  return (
    <Menu position="left-start" offset={2}>
      <Menu.Target>
        <ActionIcon variant="white" size="sm">
          <IconDotsVertical color="gray" />
        </ActionIcon>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item
          onClick={() => {
            openConfirmModal({
              ...MODAL_PROPS.ON_RESET,
              onConfirm: () => onReset(),
            });
          }}
          leftSection={
            <IconRefresh style={{ width: rem(14), height: rem(14) }} />
          }
        >
          リセット
        </Menu.Item>
        <Menu.Item
          color="red"
          disabled={!isDeletable}
          onClick={() => {
            openConfirmModal({
              ...MODAL_PROPS.ON_DELETE,
              onConfirm: () => onDelete(),
            });
          }}
          leftSection={
            <IconTrash style={{ width: rem(14), height: rem(14) }} />
          }
        >
          削除
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};
