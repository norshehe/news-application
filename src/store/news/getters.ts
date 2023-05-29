import { GetterTree } from "vuex";

import { RootState } from "@/store";

import { State, StateTypes } from "./state";

export type Getters = {
  getTopHeadlines(state: StateTypes): StateTypes["topHeadlines"];
  getSources(state: StateTypes): StateTypes["sources"];
  getCurrentSource(state: StateTypes): StateTypes["currentSource"];
  getCurrentCountry(state: StateTypes): StateTypes["currentCountry"];
  getHeadlineFilter(state: StateTypes): StateTypes["headlineFilter"];
  getHeadlineLoading(state: StateTypes): StateTypes["headlineLoading"];
  getArticleHistory(state: StateTypes): StateTypes["articleHistory"];
};

export const getters: GetterTree<State, RootState> & Getters = {
  getTopHeadlines: (state) => state.topHeadlines,
  getSources: (state) => state.sources,
  getCurrentSource: (state) => state.currentSource,
  getCurrentCountry: (state) => state.currentCountry,
  getHeadlineFilter: (state) => state.headlineFilter,
  getHeadlineLoading: (state) => state.headlineLoading,
  getArticleHistory: (state) =>
    window.localStorage.getItem("article-history") != null
      ? JSON.parse(window.localStorage.getItem("article-history") as string)
      : state.articleHistory,
};
