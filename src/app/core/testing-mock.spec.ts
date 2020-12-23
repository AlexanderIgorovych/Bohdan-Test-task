import {Column, GetContextMenuItemsParams, RowNode} from '@ag-grid-community/all-modules';
import {SearchItemListModel} from './models/search-item-list-model';
import {VideoItemModel} from './models/video-item-model';
import {BehaviorSubject, Observable} from 'rxjs';

export const mockVideo: VideoItemModel = {
  kind: 'youtube#searchResult',
  etag: 'etag',
  id: {kind: 'youtube#video', videoId: 'videoId_1'},
  snippet: {
    publishedAt: '2019-09-04T15:00:12Z',
    channelId: 'channelId_1',
    title: 'title_1',
    description: 'description_1',
    thumbnails: {
      default: {url: 'default.jpg', width: 120, height: 90},
      medium: {url: 'mqdefault.jpg', width: 320, height: 180},
      high: {url: 'hqdefault.jpg', width: 480, height: 360}
    },
    channelTitle: 'ABS-CBN Entertainment',
    liveBroadcastContent: 'none',
    publishTime: '2019-09-04T15:00:12Z'
  }
};

export const mockVideoList: VideoItemModel[] = [
  mockVideo,
  {
    ...mockVideo,
    id: {kind: 'youtube#video', videoId: 'videoId_2'},
    snippet: {
      ...mockVideo.snippet,
      publishedAt: '2019-09-05T16:00:12Z',
      channelId: 'channelId_2',
      title: 'title_2',
      description: 'description_2'
    }
  }
];

export const mockResponse: SearchItemListModel = {
  kind: 'youtube#searchListResponse',
  etag: 'etag',
  nextPageToken: 'nextPageToken',
  regionCode: 'UA',
  pageInfo: {
    totalResults: 1000000,
    resultsPerPage: 2
  },
  items: mockVideoList
};

export const mockContextParams: GetContextMenuItemsParams = {
  column: new Column({}, null, 'colId', true),
  defaultItems: null,
  node: new RowNode(),
  value: null,
  api: null,
  columnApi: null,
  context: null

};

export const mockVideoWithData = {
  data: {
    kind: 'youtube#searchResult',
    etag: 'etag',
    id: {kind: 'youtube#video', videoId: 'videoId_1'},
    snippet: {
      publishedAt: '2019-09-04T15:00:12Z',
      channelId: 'channelId_1',
      title: 'title_1',
      description: 'description_1',
      thumbnails: {
        default: {url: 'default.jpg', width: 120, height: 90},
        medium: {url: 'mqdefault.jpg', width: 320, height: 180},
        high: {url: 'hqdefault.jpg', width: 480, height: 360}
      },
      channelTitle: 'ABS-CBN Entertainment',
      liveBroadcastContent: 'none',
      publishTime: '2019-09-04T15:00:12Z'
    }
  }
};
export const mockICellRendererParamsNgGrid = {
  data: {
    text: 'mockText',
    link: 'mockLink',
  },
};

export class MockStore<T> {
  private state: BehaviorSubject<T> = new BehaviorSubject(undefined);

  setState(data: T): void {
    this.state.next(data);
  }

  select(selector?: any): Observable<T> {
    return this.state.asObservable();
  }

  dispatch(action: any): void {
  }
}

export const initialState = {
  videos: null,
  selectionCount: 0,
  selectionMode: false,
  err: null,
};

