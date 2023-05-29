export interface BaseQuery {
  apiKey?: string;
}

export interface TopHeadlinesQuery extends BaseQuery {
  country?: string;
  sources?: string;
  q?: string;
  pageSize?: number;
}

export interface SourcesQuery extends BaseQuery {
  country?: string;
}
