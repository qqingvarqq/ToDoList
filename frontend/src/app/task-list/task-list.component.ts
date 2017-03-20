import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  providers: [TaskService]
})
/*
  TaskListComponent
  View all task 
  and split it by two category:
                      Active/Already Done 
  Use TaskServise as data provider
  for get delete and update (status) operations
*/
export class TaskListComponent implements OnInit {
  private tasks: Task[];
  private tabIndex: number;
  constructor(private taskService: TaskService, private router: Router) {
  }
  getTasks(): void {
    this.taskService.getTasks().then(Tasks => this.tasks = Tasks);
  }
  ngOnInit() {
    this.tabIndex = 0;
    this.getTasks();
  }
  deleteTask(task: Task) {
    this.taskService.deleteTask(task);
    this.getTasks();
  }
  updateTaskStatus(task: Task, value: boolean) {
    task.status = value;
    this.taskService.updateTaskStatus(task);
  }

}
