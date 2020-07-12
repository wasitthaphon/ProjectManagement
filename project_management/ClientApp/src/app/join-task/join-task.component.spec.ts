import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinTaskComponent } from './join-task.component';

describe('JoinTaskComponent', () => {
  let component: JoinTaskComponent;
  let fixture: ComponentFixture<JoinTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
