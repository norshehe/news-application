export interface ResponseWrapper {
  status: string;
  totalResults: number;
}

export interface TopHeadlineArticleSourceResponse {
  id: number | null;
  name: string;
}

export interface TopHeadlineArticlesResponse {
  author: string | null;
  content: string | null;
  description: string;
  publishedAt: string;
  source: TopHeadlineArticleSourceResponse;
  title: string;
  url: string;
  urlToImage: string;
}

export interface TopHeadlinesResponse extends ResponseWrapper {
  articles: TopHeadlineArticlesResponse[];
}

export interface SourceItemsResponse {
  category: string;
  country: string;
  description: string;
  id: string;
  language: string;
  name: string;
  url: string;
}

export interface SourcesResponse extends ResponseWrapper {
  sources: SourceItemsResponse[];
}
