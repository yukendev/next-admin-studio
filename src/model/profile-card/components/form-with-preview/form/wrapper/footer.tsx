import type { FC } from "react";

import { ContentFooterContainer } from "@/model/common/components/footer";

import { Button, Flex, Tooltip } from "@mantine/core";
import { IconInfoCircle } from "@tabler/icons-react";
import { useProfileCardFormStatus } from "../../hooks/form-status";

export const ProfileCardFormFooter: FC = () => {
  const status = useProfileCardFormStatus();

  return (
    <ContentFooterContainer
      status={status}
      footer={{
        onNew: <NewProfileCardFormFooter />,
        onDraft: <DraftProfileCardFormFooter />,
        onConfirmed: <ConfirmedProfileCardFormFooter />,
        onTemporarilyClosed: <TemporarilyClosedProfileCardFormFooter />,
      }}
    />
  );
};

const FOOTER_STYLE = {
  borderTop: "1px solid #ccc",
};

const NewProfileCardFormFooter: FC = () => {
  return (
    <Flex bg="white" p="sm" justify="space-between" style={FOOTER_STYLE}>
      <Flex align="center" gap="sm">
        <Tooltip
          label={
            <span>
              下書きはアプリに表示されません
              <br />
              確定保存の後も一部内容は編集可能です😄
            </span>
          }
          withArrow
        >
          <IconInfoCircle color="#ccc" />
        </Tooltip>
      </Flex>

      <Flex align="center" gap="sm">
        <Button>下書き保存</Button>
        <Button>確定保存</Button>
      </Flex>
    </Flex>
  );
};

const DraftProfileCardFormFooter: FC = () => {
  return (
    <Flex bg="white" p="sm" justify="space-between" style={FOOTER_STYLE}>
      <Flex align="center" gap="sm">
        <Tooltip
          label={
            <span>
              下書きはアプリに表示されません
              <br />
              確定保存の後も一部内容は編集可能です😄
            </span>
          }
          withArrow
        >
          <IconInfoCircle color="#ccc" />
        </Tooltip>
      </Flex>

      <Flex align="center" gap="sm">
        <Button>更新</Button>
        <Button>確定保存</Button>
      </Flex>
    </Flex>
  );
};

const ConfirmedProfileCardFormFooter: FC = () => {
  return (
    <Flex bg="white" p="sm" justify="space-between" style={FOOTER_STYLE}>
      <Flex align="center" gap="sm">
        <Button variant="outline" color="red">
          公開停止
        </Button>

        <Tooltip
          label={
            <span>
              公開停止するとアプリ上に現れなくなります
              <br />
              公開停止後も再公開は可能です😄
            </span>
          }
          withArrow
        >
          <IconInfoCircle color="#ccc" />
        </Tooltip>
      </Flex>
      <Flex align="center" gap="sm">
        <Button variant="outline">複製</Button>
        <Button>更新</Button>
      </Flex>
    </Flex>
  );
};

const TemporarilyClosedProfileCardFormFooter: FC = () => {
  return (
    <Flex bg="white" p="sm" justify="space-between" style={FOOTER_STYLE}>
      <Flex align="center" gap="sm">
        <Button>再公開</Button>
        <Tooltip
          label="再公開すると、公開期間内であればアプリ上に現れるようになります😄"
          withArrow
        >
          <IconInfoCircle color="#ccc" />
        </Tooltip>
      </Flex>

      <Flex align="center" gap="sm">
        <Button variant="outline">複製</Button>
        <Button>更新</Button>
      </Flex>
    </Flex>
  );
};
