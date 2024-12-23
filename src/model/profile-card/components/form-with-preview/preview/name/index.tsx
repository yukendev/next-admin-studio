import { ProfileCardNamePreviewView } from "../../../preview/name";
import { useProfileCardFormStore } from "../../store/hook";

export const ProfileCardNamePreviewContainer = () => {
  const name = useProfileCardFormStore((state) => state.name);
  return <ProfileCardNamePreviewView value={name} />;
};
