import axios from "axios";
import { createApp } from "vue";
import VueAxios from "vue-axios";
import { NEWS_API_KEY, NEWS_API_URI } from "./config.service";
import { SourcesQuery, TopHeadlinesQuery } from "@/types/query.types";
import { NewsEnums } from "@/enums/api.enums";
import { SourcesResponse, TopHeadlinesResponse } from "@/types/response.types";
import { store } from "@/store";
import { AppMutationEnums } from "@/enums/store.enums";
import { NotificationEnum } from "@/enums/notification-status.enum";

const app = createApp({});

export const ApiService = {
  init() {
    app.use(VueAxios, axios);
    axios.defaults.baseURL = NEWS_API_URI;

    // axios.interceptors.request.use((config) => {
    //   config.params = {
    //     ...config.params,
    //     apiKey: NEWS_API_KEY,
    //   };
    //   return config;
    // });

    axios.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        store.commit(AppMutationEnums.SHOW_NOTIFICATION, {
          show: true,
          message: error.response.data.message,
          type: NotificationEnum.ERROR,
        });
        return Promise.reject(error);
      }
    );
  },
  get(resource: string, slug = "") {
    let params = "";
    if (slug) params = `/${slug}`;
    return app.axios.get(`${resource}${params}`).catch((error) => {
      throw new Error(`ApiService ${error}`);
    });
  },
  query<T>(resource: string, params: T) {
    return app.axios.get(resource, { params: params }).catch((error) => {
      throw new Error(`ApiService ${error}`);
    });
  },
};

export const NewsApi = {
  async fetchTopHeadlines(query: TopHeadlinesQuery) {
    query.apiKey = NEWS_API_KEY;
    const res = await ApiService.query<TopHeadlinesQuery>(
      NewsEnums.FETCH_HEADLINES,
      query
    );
    return res.data as TopHeadlinesResponse;
  },
  async fetchTopHeadlineError() {
    const res = await ApiService.get(NewsEnums.FETCH_HEADLINES);
    return res.data as TopHeadlinesResponse;
  },
  async fetchSources(query: SourcesQuery) {
    query.apiKey = NEWS_API_KEY;
    const res = await ApiService.query(NewsEnums.FETCH_SOURCES, query);
    return res.data as SourcesResponse;
  },
};
