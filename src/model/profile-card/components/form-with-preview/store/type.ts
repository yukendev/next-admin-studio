import type { ValidationSlice } from "@/model/common/store/slice/validation";
import type { AdminLabelSlice } from "../form/inputs/admin-label/slice";
import type { BirthdaySlice } from "../form/inputs/birthday/slice";
import type { LuckyNumberSlice } from "../form/inputs/lucky-number/slice";
import type { NameSlice } from "../form/inputs/name/slice";
import type { TagsSlice } from "../form/inputs/tags/slice";
import type { ThumbnailUrlSlice } from "../form/inputs/thumbnail-url/slice";

export type ProfileCardForm = {
  id: string;
  adminLabel: string;
  birthday: Date | null;
  luckyNumber: number;
  name: string;
  tags: string[];
  thumbnailUploadedUrl: string | null;
};

export type ProfileCardFormSlice = {
  id: string;
  setId: (id: string) => void;
  getFormValue: () => ProfileCardForm;
  setProfileCardForm: (profileCardForm: ProfileCardForm) => void;
};

export type ProfileCardFormStore = AdminLabelSlice &
  BirthdaySlice &
  LuckyNumberSlice &
  NameSlice &
  TagsSlice &
  ThumbnailUrlSlice &
  ValidationSlice &
  ProfileCardFormSlice & {
    getFormIsValid: () => boolean;
  };
