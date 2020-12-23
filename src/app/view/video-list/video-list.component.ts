import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {AllCommunityModules, ColGroupDef, GetContextMenuItemsParams, GridOptions, Module} from '@ag-grid-community/all-modules';
import {MenuModule} from '@ag-grid-enterprise/menu';
import {VideoService} from 'src/app/core/services/video.service';
import {ClipboardModule} from '@ag-grid-enterprise/clipboard';
import {DatePipe} from '@angular/common';
import {Observable} from 'rxjs';
import {VideoItemModel} from '../../core/models/video-item-model';
import {ThumbnailRendererComponent} from '../components/renderers/thumbnail-renderer/thumbnail-renderer';
import {LinkRendererComponent} from '../components/renderers/link-renderer/link-renderer';
import {CheckRendererComponent} from '../components/renderers/check-renderer/check-renderer';
import {CheckboxHeaderComponent} from '../components/header/checkbox-header/checkbox-header.component';
import {HeaderComponent} from '../components/header/header.component';
import {StoreService} from '../../store/service';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss'],
  providers: [DatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideoListComponent implements OnInit {

  error$: Observable<any> = new Observable(null);
  videos$: Observable<VideoItemModel[]> = new Observable(null);
  agGridModules: Module[] = [...AllCommunityModules, MenuModule, ClipboardModule];
  gridOptions: GridOptions = {
    defaultColDef: {
      resizable: true
    },
    rowSelection: 'multiple',
    rowHeight: 90,
    suppressRowClickSelection: true,
    suppressMovableColumns: true,
    popupParent: document.querySelector('body'),
    getRowNodeId: (data: VideoItemModel) => data.id.videoId,
    getContextMenuItems: this.getContextMenuItems,
  };
  public columnDefs: ColGroupDef[] = [{
    headerGroupComponentFramework: HeaderComponent,
    children: [
      {
        colId: 'checkbox',
        headerComponentFramework: CheckboxHeaderComponent,
        cellRendererFramework: CheckRendererComponent,
        width: 60,
        hide: true,
        lockPinned: true
      },
      {
        headerName: '',
        field: 'thumbnail',
        width: 250,
        cellRenderer: 'thumbnailRenderer',
      },
      {
        headerName: 'Published on',
        field: 'snippet.publishedAt',
        width: 150,
        valueFormatter: (date) =>
          this.datePipe.transform(date.value, 'yyyy-MM-dd'),
      },
      {
        headerName: 'Video Title',
        colId: 'title',
        field: 'title',
        width: 350,
        cellRenderer: 'linkRenderer',
      },
      {headerName: 'Description', field: 'snippet.description', width: 450},
    ]
  }
  ];

  public frameworkComponents = {
    thumbnailRenderer: ThumbnailRendererComponent,
    linkRenderer: LinkRendererComponent,
    checkRenderer: CheckRendererComponent,
    checkBoxHeader: CheckboxHeaderComponent,
  };

  constructor(
    private service: VideoService,
    private datePipe: DatePipe,
    private storeService: StoreService
  ) {
  }

  ngOnInit(): void {
    this.storeService.getVideos();
    this.videos$ = this.storeService.videos$;
    this.error$ = this.storeService.error$;
  }

  createColumnDefs(): ColGroupDef[] {
    return this.columnDefs;
  }

  getContextMenuItems(params: GetContextMenuItemsParams): any[] {
    const result: any[] = ['copy', 'copyWithHeaders', 'paste'];
    if (params.column.getColDef().colId === 'title') {
      result.push({
        name: 'Open in new tab',
        action: () => {window.open(`https://www.youtube.com/watch?v=${params.node.data.id.videoId}`);
        },
      });
    }
    return result;
  }

  gridReady($event: GridOptions): void {
    $event.api.setColumnDefs(this.createColumnDefs());
    $event.api.sizeColumnsToFit();
  }

}
