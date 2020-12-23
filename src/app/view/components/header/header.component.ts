import {Component} from '@angular/core';
import {ICellRendererAngularComp} from '@ag-grid-community/angular';
import {StoreService} from '../../../store/service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements ICellRendererAngularComp {
  public params: any;

  constructor(public storeService: StoreService) {
  }

  agInit(params: any): void {
    this.params = params;
  }

  refresh(): boolean {
    return false;
  }

  toggleSelection(event: any): void {
    this.params?.columnApi.setColumnVisible('checkbox', event?.currentTarget.checked);
    this.storeService.toggleSelectionMode();
  }
}
