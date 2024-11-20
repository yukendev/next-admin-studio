import { ProfileCardBirthdayPreviewView } from "../../../preview/birthday";
import { useProfileCardFormStore } from "../../store";

export const ProfileCardBirthdayPreviewContainer = () => {
  const birthday = useProfileCardFormStore((state) => state.birthday);
  return <ProfileCardBirthdayPreviewView value={birthday} />;
};
