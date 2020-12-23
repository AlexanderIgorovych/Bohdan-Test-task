export interface SearchResultItemModel {
  publishedAt: string;
  title: SearchResultItemTitleModel;
  description: string;
  thumbnail: string;
}

export interface SearchResultItemTitleModel {
  text: string;
  link: string;
}
