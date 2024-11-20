import type { FC, PropsWithChildren } from "react";

import { DayJSProvider } from "./dayjs";
import { MantineProvider } from "./mantine";

export const Providers: FC<PropsWithChildren> = ({ children }) => (
  <DayJSProvider>
    <MantineProvider>{children}</MantineProvider>
  </DayJSProvider>
);
