import { ProfileCardBirthdayPreviewView } from "../../../preview/birthday";
import { useProfileCardFormStore } from "../../store/hook";

export const ProfileCardBirthdayPreviewContainer = () => {
  const birthday = useProfileCardFormStore((state) => state.birthday);
  return <ProfileCardBirthdayPreviewView value={birthday} />;
};
