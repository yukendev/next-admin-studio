import { ProfileCardLuckyNumberPreviewView } from "../../../preview/lucky-number";
import { useProfileCardFormStore } from "../../store";

export const ProfileCardLuckyNumberPreviewContainer = () => {
  const luckyNumber = useProfileCardFormStore((state) => state.luckyNumber);
  return <ProfileCardLuckyNumberPreviewView value={luckyNumber} />;
};
