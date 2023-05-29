import {
  SourcesResponse,
  TopHeadlineArticlesResponse,
  TopHeadlinesResponse,
} from "@/types/response.types";

export interface StateTypes {
  currentCountry: string;
  currentSource: string;
  topHeadlines: TopHeadlinesResponse | null;
  sources: SourcesResponse | null;
  headlineFilter: string;
  headlineLoading: boolean;
  articleHistory: TopHeadlineArticlesResponse[];
}

export const state: StateTypes = {
  currentCountry: "us",
  currentSource: "all",
  topHeadlines: null,
  sources: null,
  headlineFilter: "",
  headlineLoading: false,
  articleHistory: [],
};

export type State = typeof state;
