import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProjectTasksComponent } from './create-project-tasks.component';

describe('CreateProjectTasksComponent', () => {
  let component: CreateProjectTasksComponent;
  let fixture: ComponentFixture<CreateProjectTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateProjectTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProjectTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
