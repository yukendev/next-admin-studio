"use client";

import { Box, Flex, Stack } from "@mantine/core";
import type { FC, PropsWithChildren } from "react";
import { useProfileCardFormServerState } from "../../server-state/hook";
import { ProfileCardFormFooter } from "./footer";
import { ProfileCardFormHeader } from "./header";

const STYLES = {
  WRAPPER: {
    height: "calc(100vh - 60px)",
    borderLeft: "1px solid #ccc",
  },
  CONTAINER: {
    flexGrow: "1",
  },
};

const Jikken = () => {
  const serverState = useProfileCardFormServerState();
  if (!serverState) {
    return <div>new</div>;
  }
  return <div>{JSON.stringify(serverState)}</div>;
};

export const ProfileCardFormWrapper: FC<PropsWithChildren> = ({ children }) => {
  const onSubmit = async (e: React.FormEvent<HTMLDivElement>) => {
    e.preventDefault();
    /**
     * Footer内部の各種ボタンのonClickにロジックを詰め込んでいるので、
     * ここには何も書かない
     */
  };

  return (
    <Flex
      component="form"
      onSubmit={onSubmit}
      direction="column"
      style={STYLES.WRAPPER}
      data-testid="store-reservation-service-form"
    >
      <Box className="overflow-y-scroll scroll-smooth" style={STYLES.CONTAINER}>
        <ProfileCardFormHeader />
        <Stack gap="lg" px="lg" py="lg">
          {children}
          <Jikken />
        </Stack>
      </Box>
      <ProfileCardFormFooter />
    </Flex>
  );
};
