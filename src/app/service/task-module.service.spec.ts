import { TestBed } from '@angular/core/testing';

import { TaskModuleService } from './task-module.service';

describe('TaskModuleService', () => {
  let service: TaskModuleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskModuleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
