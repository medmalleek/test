import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskModuleListComponent } from './components/task-module-list/task-module-list.component';
import { UpdateTaskModuleComponent } from './components/update-task-module/update-task-module.component';

const routes: Routes = [
  {
    path: "list",
    component: TaskModuleListComponent
  },
  {
    path: "task",
    component: UpdateTaskModuleComponent
  },
  {
    path: "task/:id",
    component: UpdateTaskModuleComponent
  },
  {
    path:"**",
    redirectTo:"/list",
    pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
