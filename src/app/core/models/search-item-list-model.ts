import { PageInfoModel } from './page-info-model';
import { VideoItemModel } from './video-item-model';

export interface SearchItemListModel {
  kind: string;
  etag: string;
  nextPageToken: string;
  regionCode: string;
  pageInfo: PageInfoModel;
  items: VideoItemModel[];
}
