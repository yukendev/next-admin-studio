import type { ProfileCardFormServerState } from "../server-state/type";
import type { ProfileCardForm } from "../store/type";

export const profileCardConverter = {
  toClient: (
    serverState: ProfileCardFormServerState | undefined,
  ): ProfileCardForm | undefined => {
    if (!serverState) return undefined;

    return {
      ...serverState,
      birthday: serverState.birthday ? new Date(serverState.birthday) : null,
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
