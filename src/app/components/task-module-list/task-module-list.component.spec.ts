import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskModuleListComponent } from './task-module-list.component';

describe('TaskModuleListComponent', () => {
  let component: TaskModuleListComponent;
  let fixture: ComponentFixture<TaskModuleListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskModuleListComponent]
    });
    fixture = TestBed.createComponent(TaskModuleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
