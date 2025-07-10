import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoOnPushComponent } from "./todo-onpush.component";
import { TodoDefaultComponent } from "./todo-default.component";

@Component({
  selector: 'app-to-do',
  standalone: true,
  imports: [ FormsModule, TodoOnPushComponent, TodoDefaultComponent],
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
