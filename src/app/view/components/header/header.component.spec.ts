import {ComponentFixture, inject, TestBed} from '@angular/core/testing';

import {HeaderComponent} from './header.component';
import {StoreService} from '../../../store/service';
import {Store} from '@ngrx/store';
import {initialState, MockStore} from '../../../core/testing-mock.spec';
import { Column, RowNode } from '@ag-grid-community/all-modules';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let testStore: MockStore<any>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      providers: [StoreService, {provide: Store, useClass: MockStore}],
    })
      .compileComponents();
  });

  beforeEach(inject([Store], async (store: MockStore<any>, service: StoreService) => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    testStore = store;
    testStore.setState(initialState);
    fixture.detectChanges();
    component.params = {
      column: new Column({}, null, 'colId', true),
      defaultItems: null,
      node: new RowNode(),
      value: null,
      api: null,
      columnApi: {
        setColumnVisible: () => {

        }
       },
      context: null
    };
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('#toggleSelection: should toggle visibility of checkbox column and resize columns', () => {
    const toggleSpy = spyOn(component.params.columnApi, 'setColumnVisible');
    const event = {
      currentTarget: {
        checked: true
      }
    };
    component.toggleSelection(event);
    expect(toggleSpy).toHaveBeenCalledWith('checkbox', true);
  });

  it('should refresh params', () => {
    const refresh  = component.refresh();
    expect(refresh).toBeFalse();
  });

  it('should init params', () => {
    component.params = null;
    const params = {
      column: new Column({}, null, 'colId', true),
      defaultItems: null,
      node: new RowNode(),
      value: null,
      api: null,
      columnApi: null,
      context: null
    };
    component.agInit(params);
    expect(component.params).toEqual(params);
  });
});
