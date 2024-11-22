import { profileCardBirthdayConverter } from "../form/inputs/birthday/converter";
import { profileCardThumbnailUrlConverter } from "../form/inputs/thumbnail-url/converter";
import type { ProfileCardFormServerState } from "../server-state/type";
import type { ProfileCardForm } from "../store/type";

export const profileCardConverter = {
  toClient: (serverState: ProfileCardFormServerState): ProfileCardForm => {
    return {
      id: serverState.id,
      adminLabel: serverState.adminLabel,
      birthday: profileCardBirthdayConverter.toClient(serverState.birthday),
      luckyNumber: serverState.luckyNumber,
      name: serverState.name,
      tags: serverState.tags,
      thumbnailUrl: profileCardThumbnailUrlConverter.toClient(
        serverState.thumbnailUrl,
      ),
    };
  },
  toServer: (clientState: ProfileCardForm): ProfileCardFormServerState => {
    return {
      ...clientState,
      creationStatus: "DRAFT",
      birthday: clientState.birthday
        ? clientState.birthday.toISOString()
        : null,
    };
  },
};
