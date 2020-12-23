import {ComponentFixture, TestBed} from '@angular/core/testing';
import {CommonModule} from '@angular/common';
import {LinkRendererComponent} from './link-renderer';
import {mockVideoWithData} from '../../../../core/testing-mock.spec';


describe('LinkRenderer', () => {
  let component: LinkRendererComponent;
  let fixture: ComponentFixture<LinkRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule],
      declarations: [LinkRendererComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should (agInit)', () => {
    component.agInit(mockVideoWithData);
    expect(component.params).toEqual(mockVideoWithData);
    expect(component.link).toEqual(mockVideoWithData.data.id.videoId);
    expect(component.text).toEqual(mockVideoWithData.data.snippet.title);
  });

  it('should return (refresh()) ', () => {
    spyOn(component, 'refresh').and.callThrough();
    component.refresh();
    expect(component.refresh()).toBeFalse();
  });
});
