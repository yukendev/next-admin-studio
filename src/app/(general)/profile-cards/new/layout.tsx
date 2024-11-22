import { PROFILE_FORM_DEFAULT_VALUE_FOR_NEW } from "@/model/profile-card/components/form-with-preview/form/const";
import { ProfileCardFormStoreProvider } from "@/model/profile-card/components/form-with-preview/store/provider";

type Props = {
  params: Promise<{
    id: string;
  }>;
  children: React.ReactNode;
};

export default async function ProfileCardNewLayout(props: Props) {
  return (
    <ProfileCardFormStoreProvider
      initialState={PROFILE_FORM_DEFAULT_VALUE_FOR_NEW}
    >
      {props.children}
    </ProfileCardFormStoreProvider>
  );
}
