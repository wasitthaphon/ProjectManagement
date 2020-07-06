import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProjectProgressComponent } from './create-project-progress.component';

describe('CreateProjectProgressComponent', () => {
  let component: CreateProjectProgressComponent;
  let fixture: ComponentFixture<CreateProjectProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateProjectProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProjectProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
