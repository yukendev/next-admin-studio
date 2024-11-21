import type { FC, PropsWithChildren } from "react";

import { DayJSProvider } from "./dayjs";
import { MantineProvider } from "./mantine";
import NuqsProvider from "./nuqs";

export const Providers: FC<PropsWithChildren> = ({ children }) => (
  <DayJSProvider>
    <NuqsProvider>
      <MantineProvider>{children}</MantineProvider>
    </NuqsProvider>
  </DayJSProvider>
);
