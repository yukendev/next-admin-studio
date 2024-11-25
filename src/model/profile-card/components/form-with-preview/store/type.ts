import type { DateFieldValue } from "@/common/components/form/date-field/type";
import type { FileInputWithGalleryValue } from "@/common/components/form/file-input-with-gallery-select/type";
import type { NumberInputValue } from "@/common/components/form/number-input/type";
import type { TagsInputValue } from "@/common/components/form/tags-input/type";
import type { TextInputValue } from "@/common/components/form/text-input/type";
import type { ValidationSlice } from "@/model/common/store/slice/validation";
import type { AdminLabelSlice } from "../form/inputs/admin-label/slice";
import type { BirthdaySlice } from "../form/inputs/birthday/slice";
import type {
  DistributionMethodInputSlice,
  DistributionMethodSlice,
} from "../form/inputs/distribution-method/slice";
import type { LuckyNumberSlice } from "../form/inputs/lucky-number/slice";
import type { NameSlice } from "../form/inputs/name/slice";
import type { TagsSlice } from "../form/inputs/tags/slice";
import type { ThumbnailUrlSlice } from "../form/inputs/thumbnail-url/slice";

export type ProfileCardForm = {
  id: string;
  adminLabel: TextInputValue;
  birthday: DateFieldValue;
  luckyNumber: NumberInputValue;
  name: TextInputValue;
  tags: TagsInputValue;
  thumbnailUrl: FileInputWithGalleryValue;
} & DistributionMethodInputSlice;

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
  DistributionMethodSlice &
  ValidationSlice &
  ProfileCardFormSlice & {
    getFormIsValid: () => boolean;
  };
