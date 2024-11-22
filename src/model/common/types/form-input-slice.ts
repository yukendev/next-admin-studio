import type { StateCreator } from "zustand";
import type { ValidationPhase } from "../lib/get-validation-error-message";

export type FormInputSliceCreater<
  T extends Record<string, unknown>,
  S extends object,
> = (
  arg: S,
) => StateCreator<T & { validationPhase: ValidationPhase }, [], [], T>;
