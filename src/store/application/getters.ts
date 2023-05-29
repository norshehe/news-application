import { GetterTree } from "vuex";

import { RootState } from "@/store";

import { State, StateTypes } from "./state";

export type Getters = {
  getSnackBarNotification(
    state: StateTypes
  ): StateTypes["snackBarNotification"];
};

export const getters: GetterTree<State, RootState> & Getters = {
  getSnackBarNotification: (state) => state.snackBarNotification,
};
