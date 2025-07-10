import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-onpush',

  imports: [
    CommonModule,
    FormsModule
  ],
  template: `
    <h3>OnPush Change Detection</h3>
    <input [(ngModel)]="newTask" placeholder="Add task">
    <button (click)="addTask()">Add</button>
    <ul>
      <li *ngFor="let item of todoList; let i = index">
        {{item.task}}
        <button (click)="done(i)">Done</button>
      </li>
    </ul>
    <button (click)="mutateFirstTask()">Mutate First Task</button>
    <button (click)="markForCheck()">markForCheck()</button>
  `,
  styles: ['h3 { color: #1976d2; }'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoOnPushComponent {
  todoList = [{ task: 'OnPush strategy task', done: false }];
  newTask = '';

  constructor(private cdr: ChangeDetectorRef) {}

  addTask() {
    // OnPush detects reference change
    this.todoList = [...this.todoList, { task: this.newTask, done: false }];
    this.newTask = '';
  }

  done(i: number) {
    // This is a mutation, OnPush will NOT detect unless you markForCheck()
    this.todoList[i].done = true;
  }

  mutateFirstTask() {
    this.todoList[0].task += ' (mutated)';
    // OnPush does NOT update view unless you call markForCheck or replace the array
  }

  markForCheck() {
    this.cdr.markForCheck();
  }
}