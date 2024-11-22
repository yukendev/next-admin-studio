import { profileCardAdminLabelConverter } from "../form/inputs/admin-label/converter";
import { profileCardBirthdayConverter } from "../form/inputs/birthday/converter";
import { profileCardLuckyNumberConverter } from "../form/inputs/lucky-number/converter";
import { profileCardNameConverter } from "../form/inputs/name/converter";
import { profileCardTagsConverter } from "../form/inputs/tags/converter";
import { profileCardThumbnailUrlConverter } from "../form/inputs/thumbnail-url/converter";
import type { ProfileCardFormServerState } from "../server-state/type";
import type { ProfileCardForm } from "../store/type";

export const profileCardConverter = {
  toClient: (
    serverState: ProfileCardFormServerState | undefined,
  ): ProfileCardForm => {
    return {
      id: serverState?.id ?? "",
      adminLabel: profileCardAdminLabelConverter.toClient(
        serverState?.adminLabel,
      ),
      birthday: profileCardBirthdayConverter.toClient(serverState?.birthday),
      luckyNumber: profileCardLuckyNumberConverter.toClient(
        serverState?.luckyNumber,
      ),
      name: profileCardNameConverter.toClient(serverState?.name),
      tags: profileCardTagsConverter.toClient(serverState?.tags),
      thumbnailUrl: profileCardThumbnailUrlConverter.toClient(
        serverState?.thumbnailUrl ?? null,
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
