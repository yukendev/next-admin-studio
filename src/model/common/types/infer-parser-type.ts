import type { ParserBuilder } from "nuqs";

export type inferParserType<Parser> = Parser extends ParserBuilder<
  infer Type
> & {
  // biome-ignore lint/suspicious/noRedeclare: <explanation>
  defaultValue: infer Type;
}
  ? Type
  : Parser extends ParserBuilder<infer Type>
    ? Type | null
    : never;

export type inferParserRecordType<
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  Map extends Record<string, ParserBuilder<any>>,
> = {
  [Key in keyof Map]: inferParserType<Map[Key]>;
};
