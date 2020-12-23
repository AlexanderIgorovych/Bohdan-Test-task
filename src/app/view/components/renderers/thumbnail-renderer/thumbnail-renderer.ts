import {Component} from '@angular/core';
import {ICellRendererAngularComp} from '@ag-grid-community/angular';

@Component({
  selector: 'app-thumbnail-cell',
  template: ` <img
    [width]="params?.data.snippet.thumbnails.default.width"
    [height]="params?.data.snippet.thumbnails.default.height"
    [src]="params?.data.snippet.thumbnails.default.url"
    [alt]="params?.data.snippet.title">`,
})
export class ThumbnailRendererComponent implements ICellRendererAngularComp {
  public params: any;

  public agInit(params: any): void {
    this.params = params;
  }

  public refresh(): boolean {
    return false;
  }
}
