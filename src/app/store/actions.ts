import {createAction, props} from '@ngrx/store';

import {VideoItemModel} from '../core/models/video-item-model';


export const getVideos = createAction('[Grid] Get Videos');
export const getVideosSuccess = createAction('[Grid] Get Videos Success', props<{ videos: VideoItemModel[] }>());
export const getVideosFail = createAction('[Grid] Get Videos Fail', props<{ err: any}>());
export const selectionChanged = createAction('[Grid] Selection Changed', props<{ selectionCount: number }>());
export const toggleSelectionMode = createAction('[Grid] Selection Mode Toggled');
export const toggleOverallSelection = createAction('[Grid] Toggle Overall Selection');
