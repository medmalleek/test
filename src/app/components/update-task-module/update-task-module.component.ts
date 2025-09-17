import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskModule } from 'src/app/modules/task-module';
import { TaskModuleService } from 'src/app/service/task-module.service';

@Component({
  selector: 'app-update-task-module',
  templateUrl: './update-task-module.component.html',
  styleUrls: ['./update-task-module.component.scss']
})
export class UpdateTaskModuleComponent implements OnInit {
  task: TaskModule = {
    id: 0,
    title: '',
    description: '',
    dueDate: new Date(),
    status: 0,
    priority: 0
  };
  
  isNew = true;
  statuses = ['New', 'InProgress', 'Completed', 'Archived'];
  priorities = ['Low', 'Medium', 'High'];

  constructor(
    private taskService: TaskModuleService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.isNew = false;
      this.loadTask(id);
    }
  }

  loadTask(id: number) {
    this.taskService.getById(id).subscribe({
      next: (task) => this.task = task,
      error: (error) => console.error('Error loading task:', error)
    });
  }

  onSubmit() {
    console.log(this.task);
    
    const operation = this.isNew 
      ? this.taskService.create(this.task)
      : this.taskService.update(this.task);

    operation.subscribe({
      next: () => {
        this.router.navigate(['/list']);
      },
      error: (error) => console.error('Error saving task:', error)
    });
  }

  onCancel() {
    this.router.navigate(['/list']);
  }
}
