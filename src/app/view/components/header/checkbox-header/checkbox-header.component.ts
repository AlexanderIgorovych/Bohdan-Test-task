import {Component, OnInit} from '@angular/core';
import {ICellRendererAngularComp} from '@ag-grid-community/angular';
import {StoreService} from '../../../../store/service';

@Component({
  selector: 'app-checkbox-header',
  template: `<input type="checkbox"
                    [checked]="allSelected"
                    (change)="toggleAllRows()"
  >`
})
export class CheckboxHeaderComponent implements OnInit, ICellRendererAngularComp {
  public params: any;
  public allSelected: boolean;

  constructor(public storeService: StoreService) {
  }

  agInit(params: any): void {
    this.params = params;
  }

  refresh(params: any): boolean {
    return false;
  }

  toggleAllRows(): void {
    if (this.allSelected) {
      this.params.api.deselectAll();
    } else {
      this.params.api.selectAll();
    }
    const selectedCount = this.params.api.getSelectedRows().length;
    this.storeService.selectionChanged(selectedCount);
  }

  ngOnInit(): void {
    this.storeService.allSelected$.subscribe(value => this.allSelected = value);
  }
}
