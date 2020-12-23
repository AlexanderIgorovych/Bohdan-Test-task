import {ComponentFixture, TestBed} from '@angular/core/testing';
import {CommonModule} from '@angular/common';
import {ThumbnailRendererComponent} from './thumbnail-renderer';
import {mockVideo} from '../../../../core/testing-mock.spec';

describe('ThumbnailRendererComponent', () => {
  let component: ThumbnailRendererComponent;
  let fixture: ComponentFixture<ThumbnailRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule],
      declarations: [ThumbnailRendererComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThumbnailRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be create', () => {
    expect(component).toBeTruthy();
  });

  it('should (agInit)', () => {
    expect(component.params).toEqual(undefined);
    const expectedValueParams = mockVideo;
    component.agInit(expectedValueParams);
    expect(component.params).toEqual(expectedValueParams);
  });

  it('should return (refresh()) ', () => {
    spyOn(component, 'refresh').and.callThrough();
    const expectedValue = false;
    component.refresh();
    expect(component.refresh()).toEqual(expectedValue);
  });
});
