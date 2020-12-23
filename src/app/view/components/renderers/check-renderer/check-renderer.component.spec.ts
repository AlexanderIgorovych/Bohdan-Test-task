import {ComponentFixture, inject, TestBed} from '@angular/core/testing';
import {CommonModule} from '@angular/common';
import {CheckRendererComponent} from './check-renderer';
import {initialState, MockStore, mockVideo, mockVideoWithData} from '../../../../core/testing-mock.spec';
import {Store} from '@ngrx/store';
import {StoreService} from '../../../../store/service';

describe('CheckRendererComponent', () => {
  let component: CheckRendererComponent;
  let fixture: ComponentFixture<CheckRendererComponent>;
  let testStore: MockStore<any>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule],
      declarations: [CheckRendererComponent],
      providers: [StoreService, {provide: Store, useClass: MockStore}],
    }).compileComponents();
  });

  beforeEach(inject([Store], async (store: MockStore<any>) => {
    fixture = TestBed.createComponent(CheckRendererComponent);
    component = fixture.componentInstance;
    testStore = store;
    testStore.setState(initialState);
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should (agInit)`, () => {
    component.agInit(mockVideoWithData);
    expect(component.params).toEqual(mockVideoWithData);
    expect(component.videoID).toEqual(mockVideoWithData.data.id.videoId);
  });

  it('should return (refresh()) ', () => {
    spyOn(component, 'refresh').and.callThrough();
    const expectedValue = false;
    component.refresh();
    expect(component.refresh()).toEqual(expectedValue);
  });
});
