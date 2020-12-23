import { ThumbnailsModel } from './thumbnails-model';

export interface SnippetModel {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: ThumbnailsModel;
  channelTitle: string;
  liveBroadcastContent: string;
  publishTime: string;
}
