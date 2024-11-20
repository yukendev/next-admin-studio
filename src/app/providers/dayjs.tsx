"use client";

import { DatesProvider } from "@mantine/dates";
import dayjs from "dayjs";
import type { FC, PropsWithChildren } from "react";
import { I18nProvider } from "react-aria";

import "dayjs/locale/ja";

export const DayJSProvider: FC<PropsWithChildren> = ({ children }) => {
  dayjs.locale("ja");

  return (
    <DatesProvider settings={{ locale: "ja" }}>
      {/* react-aria を用いて date-fieldを実装しているため */}
      <I18nProvider locale="ja">{children}</I18nProvider>
    </DatesProvider>
  );
};
