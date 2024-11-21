import { parseAsArrayOf, parseAsString } from "nuqs/server";

import type { inferParserRecordType } from "@/model/common/types/infer-parser-type";

export const profileCardSearchParams = {
  freeWord: parseAsString.withDefault(""),
  storeCode: parseAsArrayOf(parseAsString).withDefault([]),
};

export type ProfileCardSearchParams = inferParserRecordType<
  typeof profileCardSearchParams
>;
