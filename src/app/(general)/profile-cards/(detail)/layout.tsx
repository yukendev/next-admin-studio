import { ProfileCardFormStoreProvider } from "@/model/profile-card/components/form-with-preview/store/provider";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProfileCardFormStoreProvider>{children}</ProfileCardFormStoreProvider>
  );
}
