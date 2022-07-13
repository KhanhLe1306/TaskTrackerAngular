import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from 'src/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  @Input() isShowForm: any;
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  deleteTask(task: Task) {
    this.taskService
      .deleteTask(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
      );
  }

  onAddTask(event: any) {
    var isAdded: boolean = false;
    this.tasks.forEach((task) => {
      if (
        task.text === event.text &&
        task.dateTime === event.dateTime &&
        task.reminder === event.reminder
      ) {
        isAdded = true;
      }
    });
    if (!isAdded) {
      this.taskService
        .addTask(event)
        .subscribe((task) => this.tasks.push(task));
    }
  }
}
