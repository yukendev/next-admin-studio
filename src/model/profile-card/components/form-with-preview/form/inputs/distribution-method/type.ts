// export type ProfileDistributionMethodInputValue =
//   | { type: "all" }
//   | {
//       type: "conditional";
//       inputs: ProfileDistributionMethodByConditionInputValue;
//     }
//   | { type: "id-specified"; csvFileUrl: string }
//   | { type: "qr-url"; url: string; description: string }
//   | null;

import type { ProfileDistributionMethodByConditionInputSlice } from "./view/by-condition/slice";

export type ProfileDistributionMethodInputType =
  | "all"
  | "conditional"
  | "id-specified"
  | "qr-url"
  | null;

export type ProfileDistributionMethodInputValue = {
  type: ProfileDistributionMethodInputType;
  conditional: ProfileDistributionMethodByConditionInputSlice;
  // idSpecified: { csvFileUrl: string };
  // qrUrl: { url: string; description: string };
};
