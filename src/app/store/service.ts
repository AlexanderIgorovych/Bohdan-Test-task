import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';


import {getAllSelected, getError, getSelectionCount, getVideosSelector} from './selectors';
import {getVideos, selectionChanged, toggleOverallSelection, toggleSelectionMode} from './actions';
import {AppState} from './state';
import {VideoItemModel} from '../core/models/video-item-model';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  videos$: Observable<VideoItemModel[]> = this.store.select(getVideosSelector);
  selectionCount$: Observable<number> = this.store.select(getSelectionCount);
  allSelected$: Observable<boolean> = this.store.select(getAllSelected);
  error$: Observable<any> = this.store.select(getError);

  constructor(private store: Store<AppState>) {}

  getVideos(): void {
    this.store.dispatch(getVideos());
  }

  selectionChanged(count: number): void {
    this.store.dispatch(selectionChanged({ selectionCount: count }));
  }

  toggleSelectionMode(): void {
    this.store.dispatch(toggleSelectionMode());
  }

  toggleOverallSelection(): void {
    this.store.dispatch(toggleOverallSelection());
  }
}
