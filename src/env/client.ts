"client-only";

import { minLength, picklist, pipe, string, parse } from "valibot";

export const ENV_CLIENT = {
  NEXT_PUBLIC_APP_TITLE: parse(
    pipe(string(), minLength(1)),
    process.env.NEXT_PUBLIC_APP_TITLE
  ),
  NEXT_PUBLIC_APP_ENV: parse(
    picklist(["dev", "stg", "prod"]),
    process.env.NEXT_PUBLIC_APP_ENV
  ),
};