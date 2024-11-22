import type { StateCreator } from "zustand";
import type { ValidationPhase } from "../lib/get-validation-error-message";

// export type FormInputSliceCreater<T> = StateCreator<
//   T & { validationPhase: ValidationPhase },
//   [],
//   [],
//   T
// >;

export type FormInputSliceCreater<
  T extends Record<string, unknown>,
  S extends keyof T,
> = (
  arg: { [key in S]: T[key] } | undefined,
) => StateCreator<T & { validationPhase: ValidationPhase }, [], [], T>;
