export type ProfileDistributionMethodInputType =
  | "all"
  | "conditional"
  // | "id-specified"
  // | "qr-url"
  | null;

export type ProfileDistributionMethodInputValue = {
  type: ProfileDistributionMethodInputType;
};
