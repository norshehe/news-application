import { ActionTree, ActionContext } from "vuex";

import { RootState } from "@/store";

import { State } from "./state";
import { Mutations } from "./mutations";
import { NewsActionEnums, NewsMutationEnums } from "@/enums/store.enums";
import { NewsApi } from "@/common/api.service";
import { SourcesQuery, TopHeadlinesQuery } from "@/types/query.types";
import { SourcesResponse, TopHeadlinesResponse } from "@/types/response.types";

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, RootState>, "commit">;

export interface Actions {
  [NewsActionEnums.FETCH_TOP_HEADLINES]({
    commit,
    state,
  }: AugmentedActionContext): Promise<TopHeadlinesResponse>;

  [NewsActionEnums.FETCH_SOURCES](
    { commit }: AugmentedActionContext,
    query: SourcesQuery
  ): Promise<SourcesResponse>;
}

export const actions: ActionTree<State, RootState> & Actions = {
  [NewsActionEnums.FETCH_TOP_HEADLINES]({ commit, state }) {
    return new Promise((resolved, reject) => {
      const query = {
        sources: state.currentSource == "all" ? undefined : state.currentSource,
        country:
          state.currentSource == "all" ? state.currentCountry : undefined,
        q: state.headlineFilter,
        pageSize: 21,
      } as TopHeadlinesQuery;
      commit(NewsMutationEnums.SET_HEADLINE_LOADING, true);
      NewsApi.fetchTopHeadlines(query)
        .then((res) => {
          commit(NewsMutationEnums.SET_TOP_HEADLINES, res);
          commit(NewsMutationEnums.SET_HEADLINE_LOADING, false);
          resolved(res);
        })
        .catch((err) => {
          commit(NewsMutationEnums.SET_HEADLINE_LOADING, false);
          reject(err);
        });
    });
  },
  [NewsActionEnums.FETCH_SOURCES]({ commit, state }) {
    return new Promise((resolved, reject) => {
      NewsApi.fetchSources({ country: state.currentCountry })
        .then((res) => {
          commit(NewsMutationEnums.SET_SOURCES, res);
          resolved(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};
