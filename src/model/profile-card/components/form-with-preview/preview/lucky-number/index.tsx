import { ProfileCardLuckyNumberPreviewView } from "../../../preview/lucky-number";
import { useProfileCardFormStore } from "../../store/hook";

export const ProfileCardLuckyNumberPreviewContainer = () => {
  const luckyNumber = useProfileCardFormStore((state) => state.luckyNumber);
  return <ProfileCardLuckyNumberPreviewView value={luckyNumber} />;
};
