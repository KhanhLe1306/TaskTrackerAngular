import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  @Input() task: any;
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  onToggle() {
    this.task.reminder = !this.task.reminder;
  }
  
}
