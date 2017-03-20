import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { Input } from '@angular/core'
import { TaskService } from '../task.service'
import { Router } from '@angular/router';

/*
  Task Editor Form
  Add new task to the list
*/

@Component({
  selector: 'app-task-editor',
  templateUrl: './task-editor.component.html',
  styleUrls: ['./task-editor.component.css'],
  providers: [
    TaskService
  ],
})
export class TaskEditorComponent implements OnInit {
  @Input() model = new Task("", "", null, true);
  //Submit task and add to the list
  //title field required
  //default status=true
  onSubmit() {
    if (this.model.title != "") {
      this.taskService.addTask(this.model);
      this.router.navigateByUrl('taskList');
    }
  }
  constructor(private taskService: TaskService, private router: Router) { }
  ngOnInit() {
  }

}
