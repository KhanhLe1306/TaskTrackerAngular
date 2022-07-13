import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  @Input() task: any;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }

  onToggle() {
    this.task.reminder = !this.task.reminder;
  }

  onDelete(task: Task) {
    this.onDeleteTask.emit(task);
  }
  
}
