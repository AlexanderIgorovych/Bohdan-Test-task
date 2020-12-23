import {ComponentFixture, inject, TestBed} from '@angular/core/testing';

import {CheckboxHeaderComponent} from './checkbox-header.component';
import {Store} from '@ngrx/store';
import {initialState, MockStore} from '../../../../core/testing-mock.spec';
import {StoreService} from '../../../../store/service';

describe('CheckboxHeaderComponent', () => {
  let component: CheckboxHeaderComponent;
  let fixture: ComponentFixture<CheckboxHeaderComponent>;
  let testStore: MockStore<any>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheckboxHeaderComponent],
      providers: [StoreService, {provide: Store, useClass: MockStore}],
    })
    .compileComponents();
  });

  beforeEach(inject([Store], async (store: MockStore<any>) => {
    fixture = TestBed.createComponent(CheckboxHeaderComponent);
    component = fixture.componentInstance;
    testStore = store;
    testStore.setState(initialState);
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
