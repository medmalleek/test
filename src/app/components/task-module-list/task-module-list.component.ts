import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Priority, Status, TaskModule } from 'src/app/modules/task-module';
import { TaskModuleService } from 'src/app/service/task-module.service';

@Component({
  selector: 'app-task-module-list',
  templateUrl: './task-module-list.component.html',
  styleUrls: ['./task-module-list.component.scss']
})
export class TaskModuleListComponent implements OnInit {
  tasks: TaskModule[] = [];
  tasksFiltered: TaskModule[] = [];
  tasksShow: TaskModule[] = [];
  currentPage = 1;
  pageSize = 10;
  totalItems = 0;
  searchTerm = '';
  selectedStatus: number=-1;
  isLoading = true;
  statuses = ['New', 'InProgress', 'Completed', 'Archived'];

  constructor(
    private taskService: TaskModuleService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.isLoading = true;
    this.taskService.getAll(
    ).subscribe({
      next: (response) => {
        this.tasks = response;
        this.totalItems = this.tasksFiltered.length;
        this.onSearch();
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading tasks:', error);
        this.isLoading = false;
      }
    });
  }

  onSearch(): void {
    this.currentPage = 1;
    console.log(this.selectedStatus);
    
    if(this.statuses[this.selectedStatus])
      this.tasksFiltered=this.tasks.filter(task=>
        task.status==this.selectedStatus && task.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    else
      this.tasksFiltered = this.tasks.filter(task =>
        task.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    this.totalItems = this.tasksFiltered.length;
    this.onPageChange(this.currentPage);
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.tasksShow=this.tasksFiltered.slice((this.currentPage-1)*this.pageSize,(this.currentPage-1)*this.pageSize+this.pageSize);
  }

  onEdit(id: number): void {
    this.router.navigate(['/task', id]);
  }

  onDelete(id: number): void {
    if (confirm('Are you sure you want to delete this task?')) {
      this.taskService.delete(id).subscribe({
        next: () => {
          this.loadTasks();
        },
        error: (error) => {
          console.error('Error deleting task:', error);
        }
      });
    }
  }

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.pageSize);
  }
}