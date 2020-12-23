import {createSelector} from '@ngrx/store';
import {AppState} from './state';


export const appState = store => store.state;
export const getVideosSelector = createSelector(appState, (state: AppState) => state.videos);
export const getSelectionCount = createSelector(appState, (state: AppState) => state.selectionCount);
export const getSelectionMode = createSelector(appState, (state: AppState) => state.selectionMode);
export const getAllSelected = createSelector(appState, (state: AppState) => state.selectionCount === state.videos?.length);
export const getError = createSelector(appState, (state: AppState) => state.err);
