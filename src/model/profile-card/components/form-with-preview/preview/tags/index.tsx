import { ProfileCardTagsPreviewView } from "../../../preview/tags";
import { useProfileCardFormStore } from "../../store/hook";

export const ProfileCardTagsPreviewContainer = () => {
  const tags = useProfileCardFormStore((state) => state.tags);
  return <ProfileCardTagsPreviewView value={tags} />;
};
