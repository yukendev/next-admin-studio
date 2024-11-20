export type ProfileCardForm = {
  adminLabel: string;
  birthday: Date | null;
  luckyNumber: number;
  name: string;
  tags: string[];
};

export type ProfileCardFormSlice = {
  getFormValue: () => ProfileCardForm;
  setProfileCardForm: (profileCardForm: ProfileCardForm) => void;
};
