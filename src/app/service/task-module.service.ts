import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TaskModule } from '../modules/task-module';

@Injectable({
  providedIn: 'root'
})
export class TaskModuleService {
private apiUrl = 'https://localhost:7129/api/tasks';

  constructor(private http: HttpClient) { }

  getById(id: number): Observable<TaskModule> {
    return this.http.get<TaskModule>(`${this.apiUrl}/${id}`);
  }

  create(task: TaskModule): Observable<void> {
    return this.http.post<void>(this.apiUrl, task);
  }

  update(task: TaskModule): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}`, task);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getAll(): Observable<TaskModule[]> {
    return this.http.get<TaskModule[]>(`${this.apiUrl}`);
  }
}

