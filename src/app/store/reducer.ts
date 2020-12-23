import {createReducer, on} from '@ngrx/store';

import {initialState} from './state';
import {getVideosFail, getVideosSuccess, selectionChanged, toggleOverallSelection, toggleSelectionMode} from './actions';


export const reducer = createReducer(
  initialState,
  on(getVideosSuccess, (state, {videos}) => ({...state, videos})),
  on(getVideosFail, (state, {err}) => ({...state, err})),
  on(selectionChanged, (state, {selectionCount}) => ({...state, selectionCount})),
  on(toggleSelectionMode, (state) => ({...state, selectionMode: !state.selectionMode})),
  on(toggleOverallSelection, (state) => ({
    ...state,
    selectionCount: state.selectionCount === state.videos?.length ? 0 : state.videos?.length
  }))
);

