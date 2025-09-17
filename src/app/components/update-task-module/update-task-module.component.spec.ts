import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTaskModuleComponent } from './update-task-module.component';

describe('UpdateTaskModuleComponent', () => {
  let component: UpdateTaskModuleComponent;
  let fixture: ComponentFixture<UpdateTaskModuleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateTaskModuleComponent]
    });
    fixture = TestBed.createComponent(UpdateTaskModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
