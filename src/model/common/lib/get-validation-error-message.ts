import { match } from "ts-pattern";

import type { Validation } from "@/common/lib/form-validation/type";

export type ValidationPhase = "onChange" | "onDraftSubmit" | "onConfirmSubmit";

type Props<T> = {
  phase: ValidationPhase;
  validations: {
    onChange?: Validation<T>[];
    onDraftSubmit?: Validation<T>[];
    onConfirmSubmit?: Validation<T>[];
  };
};

export const getErrorMessagesFromValidations = (
  validations: Validation<unknown>[],
): string[] => {
  const messages: string[] = [];

  // MEMO: filter(...).map(...)よりも計算が少ない
  for (const v of validations) {
    if (!v.isOk) {
      messages.push(v.errorMessage);
    }
  }

  return messages;
};

export const getValidationtErrorMessage = <T>({
  phase,
  validations = {
    onChange: [],
    onDraftSubmit: [],
    onConfirmSubmit: [],
  },
}: Props<T>) => {
  const validationsOnPhase = match(phase)
    .with("onChange", () => validations.onChange ?? [])
    .with("onDraftSubmit", () => [
      ...(validations.onChange ?? []),
      ...(validations.onDraftSubmit ?? []),
    ])
    .with("onConfirmSubmit", () => [
      ...(validations.onChange ?? []),
      ...(validations.onDraftSubmit ?? []),
      ...(validations.onConfirmSubmit ?? []),
    ])
    .exhaustive();

  return getErrorMessagesFromValidations(validationsOnPhase);
};
