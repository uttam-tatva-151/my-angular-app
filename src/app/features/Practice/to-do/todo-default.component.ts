import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-todo-default',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  template: `
    <h3>Default Change Detection</h3>
    <input [(ngModel)]="newTask" placeholder="Add task">
    <button (click)="addTask()">Add</button>
    <ul>
      <li *ngFor="let item of todoList; let i = index">
        {{item.task}} <button (click)="done(i)">Done</button>
      </li>
    </ul>
    <button (click)="mutateFirstTask()">Mutate First Task</button>
  `,
  styles: ['h3 { color: #388e3c; }']
})
export class TodoDefaultComponent {
  todoList = [{ task: 'Default strategy task', done: false }];
  newTask = '';

  addTask() {
    this.todoList.push({ task: this.newTask, done: false });
    this.newTask = '';
  }

  done(i: number) {
    this.todoList[i].done = true;
  }

  mutateFirstTask() {
    this.todoList[0].task += ' (mutated)';
  }
}