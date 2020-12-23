import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {SearchItemListModel} from '../models/search-item-list-model';
import {VideoItemModel} from '../models/video-item-model';

@Injectable()
export class VideoService {


  public key = 'AIzaSyAcmzWY1736EIW5sSXecYunpdMEhpqDePc';

  constructor(private http: HttpClient) {
  }

  getVideoList(): Observable<VideoItemModel[]> {
    return this.http.get<SearchItemListModel>(youtubeURL(this.key, 'Angular', 30)).pipe(
      map(list => list.items)
    );
  }

}

function youtubeURL(key: string, query: string, count: number): string {
  return `https://www.googleapis.com/youtube/v3/search?key=${key}&maxResults=${count}&type=video&part=snippet&q=${query}`;

}
