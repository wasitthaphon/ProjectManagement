import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProjectHeadComponent } from './create-project-head.component';

describe('CreateProjectHeadComponent', () => {
  let component: CreateProjectHeadComponent;
  let fixture: ComponentFixture<CreateProjectHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateProjectHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProjectHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
