import { MutationTree } from "vuex";

import { State } from "./state";
import { AppMutationEnums } from "@/enums/store.enums";
import { NotificationType } from "@/types/app.types";

export type Mutations<S = State> = {
  [AppMutationEnums.SHOW_NOTIFICATION](
    state: S,
    payload: NotificationType
  ): void;
};

export const mutations: MutationTree<State> & Mutations = {
  [AppMutationEnums.SHOW_NOTIFICATION](state, payload: NotificationType) {
    state.snackBarNotification.show = payload.show;
    state.snackBarNotification.message = payload.message;
    state.snackBarNotification.type = payload.type;
  },
};
