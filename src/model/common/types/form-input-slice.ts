import type { StateCreator } from "zustand";
import type { ValidationPhase } from "../lib/get-validation-error-message";

export type FormInputSliceCreater<T> = StateCreator<
  T & { validationPhase: ValidationPhase },
  [],
  [],
  T
>;
