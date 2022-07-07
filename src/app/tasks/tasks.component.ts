import { Component, OnInit } from '@angular/core';
import { Task } from 'src/Task';
import { TASKS } from '../taskDB';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = TASKS;
  
  constructor() { }

  ngOnInit(): void {
  }

  onAddTask(event: any) {
    var isAdded: boolean = false;
    this.tasks.forEach((task) => {
      if (task.text === event.text && task.dateTime === event.dateTime && task.reminder === event.reminder)
      {
        isAdded = true;
      }
    })
    if (!isAdded) {
      this.tasks.push(event);
      console.log(this.tasks);
    }
  }

}
