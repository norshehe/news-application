import { createStore } from "vuex";

import { store as news, NewsStore, State as NewsState } from "@/store/news";
import {
  store as application,
  AppStore,
  State as ApplicationState,
} from "@/store/application";

export type RootState = {
  news: NewsState;
  application: ApplicationState;
};

export type Store = NewsStore<Pick<RootState, "news">> &
  AppStore<Pick<RootState, "application">>;

export const store = createStore({
  modules: {
    news,
    application,
  },
});

export function useStore(): Store {
  return store as Store;
}
