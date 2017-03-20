import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskEditorComponent } from './task-editor/task-editor.component';

const routes: Routes = [
    {
        path: 'taskList',
        component: TaskListComponent
      },
      {
        path: 'newTask',
        component: TaskEditorComponent
      },
      {
        path: '',
        redirectTo: '/taskList',
        pathMatch: 'full'
      }
]
@NgModule({
  imports: [ RouterModule.forRoot(routes,{ useHash: true }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}