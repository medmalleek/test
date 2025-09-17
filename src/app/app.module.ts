import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';  // Add this import

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskModuleListComponent } from './components/task-module-list/task-module-list.component';
import { UpdateTaskModuleComponent } from './components/update-task-module/update-task-module.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TaskModuleListComponent,
    UpdateTaskModuleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
