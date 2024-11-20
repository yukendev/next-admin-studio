import { FC, PropsWithChildren } from "react";

import { MantineProvider } from "./mantine";
import { DayJSProvider } from "./dayjs";

export const Providers: FC<PropsWithChildren> = ({ children }) => (
  <DayJSProvider>
    <MantineProvider>{children}</MantineProvider>
  </DayJSProvider>
);
