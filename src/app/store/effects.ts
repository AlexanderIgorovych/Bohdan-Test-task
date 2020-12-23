import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';
import {getVideosFail, getVideosSuccess} from './actions';
import {VideoItemModel} from '../core/models/video-item-model';
import {VideoService} from '../core/services/video.service';

@Injectable({
  providedIn: 'root',
})
export class AppEffects {

  getVideos$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Grid] Get Videos'),
      switchMap(() =>
        this.videoService.getVideoList().pipe(
          map((videos: VideoItemModel[]) => getVideosSuccess({videos})),
          catchError(err => of(getVideosFail({err}))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private videoService: VideoService
  ) {
  }
}
