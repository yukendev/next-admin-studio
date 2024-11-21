import { ProfileCardFormServerStateProviderContainer } from "@/model/profile-card/components/form-with-preview/server-state";
import { ProfileCardFormStoreProvider } from "@/model/profile-card/components/form-with-preview/store/provider";

type Props = {
  params: Promise<{
    id: string;
  }>;
  children: React.ReactNode;
};

export default async function ProfileCardDetailLayout(props: Props) {
  const { id } = await props.params;

  return (
    <ProfileCardFormServerStateProviderContainer id={id}>
      {(formValue) => (
        <ProfileCardFormStoreProvider initialState={formValue}>
          {props.children}
        </ProfileCardFormStoreProvider>
      )}
    </ProfileCardFormServerStateProviderContainer>
  );
}
