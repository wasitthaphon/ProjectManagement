import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProjectMembersComponent } from './create-project-members.component';

describe('CreateProjectMembersComponent', () => {
  let component: CreateProjectMembersComponent;
  let fixture: ComponentFixture<CreateProjectMembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateProjectMembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProjectMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
