import { log } from 'util';
import { Injectable } from '@angular/core';
import { Task } from './task';
import { TASKS } from './mock-tasks';
import { Headers, Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

/*
  TaskService
  Define CRUD operations for our TodoList app
*/
@Injectable()
export class TaskService {
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private tasksUrl = 'api/tasks';
  constructor(private http: Http) {

  }
  //get all task from server
  getTasks(): Promise<Task[]> {
    return this.http.get(this.tasksUrl)
      .toPromise()
      .then(function (response) {
        return response.json() as Task[];
      });
  }
  
  addTask(task: Task) {
    var body = JSON.stringify(task);
    var options = new RequestOptions({ headers: this.headers, method: "post" });
    this.http.post(this.tasksUrl, body, options).subscribe();
  }

  deleteTask(task: Task) {
    this.http.delete(`${this.tasksUrl}/${task._id}`).subscribe();
  }

  //Update task status active/already done
  updateTaskStatus(task: Task) {
    var options = new RequestOptions({ headers: this.headers, method: "put" });
    this.http.put(`${this.tasksUrl}/${task._id}`, JSON.stringify(task), options).subscribe();
  }
}
