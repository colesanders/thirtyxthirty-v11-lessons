import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonsOverviewComponent } from './lessons-overview.component';

describe('LessonsOverviewComponent', () => {
  let component: LessonsOverviewComponent;
  let fixture: ComponentFixture<LessonsOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonsOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
