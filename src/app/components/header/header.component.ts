import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker';
  text: string = 'Add';
  isShowForm: boolean = false;
  @Output() showFormEmitter: EventEmitter<boolean> = new EventEmitter();
  constructor(taskService: TaskService) {}

  ngOnInit(): void {}

  toggleAddTask() {
    if (this.text === 'Add') {
      this.text = 'Close';
      this.isShowForm = true;
    } else {
      this.text = 'Add';
      this.isShowForm = false;
    }
    this.showFormEmitter.emit(this.isShowForm);
  }

}
