import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Task } from '../../Task'

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private url: string = 'http://localhost:5000/tasks'

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.url);
  }

  deleteTask(task: Task): Observable<Task>{
    console.log(task);
    const url = this.url + `/${task.id}`;
    return this.http.delete<Task>(url);
  }

  addTask(task: Task): Observable<Task>{
    return this.http.post<Task>(this.url, task);
  }
}
