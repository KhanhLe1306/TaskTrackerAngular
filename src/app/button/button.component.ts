import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() name: any;

  constructor() { }

  ngOnInit(): void {
  }

  onAddClose(): void{
    console.log(this.name);
  }
}
