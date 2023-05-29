import {
  SourcesResponse,
  TopHeadlineArticlesResponse,
  TopHeadlinesResponse,
} from "@/types/response.types";
import { MutationTree } from "vuex";

// import { UserDocuments, Count } from "@/@types";

import { State } from "./state";
import { NewsMutationEnums } from "@/enums/store.enums";

export type Mutations<S = State> = {
  [NewsMutationEnums.SET_TOP_HEADLINES](
    state: S,
    payload: TopHeadlinesResponse
  ): void;
  [NewsMutationEnums.SET_SOURCES](state: S, payload: SourcesResponse): void;
  [NewsMutationEnums.SET_CURRENT_COUNTRY](state: S, payload: string): void;
  [NewsMutationEnums.SET_RECENT](state: S, payload: string): void;
  [NewsMutationEnums.SET_CURRENT_SOURCE](state: S, payload: string): void;
  [NewsMutationEnums.SET_HEADLINE_FILTER](state: S, payload: string): void;
  [NewsMutationEnums.SET_HEADLINE_LOADING](state: S, payload: boolean): void;
  [NewsMutationEnums.SET_ARTICLE_HISTORY](
    state: S,
    payload: TopHeadlineArticlesResponse
  ): void;
};

export const mutations: MutationTree<State> & Mutations = {
  [NewsMutationEnums.SET_TOP_HEADLINES](state, payload: TopHeadlinesResponse) {
    state.topHeadlines = payload;
  },
  [NewsMutationEnums.SET_SOURCES](state, payload: SourcesResponse) {
    state.sources = payload;
  },
  [NewsMutationEnums.SET_CURRENT_COUNTRY](state, payload: string) {
    state.currentSource = "all";
    state.currentCountry = payload;
  },
  [NewsMutationEnums.SET_RECENT](state, payload: string) {
    const source = state.sources?.sources.find((i) => i.id == payload);
    if (source) {
      const index = state.sources?.sources?.indexOf(source);
      if (index) {
        if (index > 3) {
          state.sources?.sources.unshift(source);
          state.sources?.sources.splice(index + 1, 1);
        }
      }
    }
    // state.sources?.sources.unshift(payload);
  },
  [NewsMutationEnums.SET_CURRENT_SOURCE](state, payload: string) {
    state.currentSource = payload;
  },
  [NewsMutationEnums.SET_HEADLINE_FILTER](state, payload: string) {
    state.headlineFilter = payload;
  },
  [NewsMutationEnums.SET_HEADLINE_FILTER](state, payload: string) {
    state.headlineFilter = payload;
  },
  [NewsMutationEnums.SET_HEADLINE_LOADING](state, payload: boolean) {
    state.headlineLoading = payload;
  },
  [NewsMutationEnums.SET_ARTICLE_HISTORY](
    state,
    payload: TopHeadlineArticlesResponse
  ) {
    const articleHistory = window.localStorage.getItem("article-history");
    if (articleHistory) {
      state.articleHistory = JSON.parse(articleHistory);
    }

    if (
      !state.articleHistory.find(
        (d) =>
          d.title == payload.title &&
          d.source.name == payload.source.name &&
          d.author == payload.author
      )
    ) {
      state.articleHistory.unshift(payload);

      window.localStorage.setItem(
        "article-history",
        JSON.stringify(state.articleHistory)
      );
    }
  },
};
