import {VideoItemModel} from '../core/models/video-item-model';

export interface AppState {
  videos: VideoItemModel[];
  selectionCount: number;
  selectionMode: boolean;
  err: any;
}

export const initialState: AppState = {
  videos: null,
  selectionCount: 0,
  selectionMode: false,
  err: null,
};
