import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/Task';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {
  text: string = '';
  dateTime: string = '';
  reminder: boolean = false;
  @Output() onAddTask = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    var obj: Task = {
      text : this.text,
      dateTime : this.dateTime,
      reminder : this.reminder
    }
    this.onAddTask.emit(obj);
  }
}
