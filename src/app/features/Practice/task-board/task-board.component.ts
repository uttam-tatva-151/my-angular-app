import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Task } from '../../../core/models/Task';

let nextId = 4;

@Component({
  selector: 'app-task-board',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-board.component.html',
  styleUrls: ['./task-board.component.css']
})
export class TaskBoardComponent  {
  tasks: Task[] = [
    { id: 1, title: 'Setup Project', description: 'Initialize Angular repo', status: 'todo' },
    { id: 2, title: 'Design Board', description: 'Create UI for Kanban', status: 'inprogress' },
    { id: 3, title: 'Testing', description: 'Write unit tests', status: 'done' }
  ];

  readonly statuses: Array<'todo' | 'inprogress' | 'done'> = ['todo', 'inprogress', 'done'];

  newTaskTitle = '';
  newTaskDesc = '';
  newTaskStatus: 'todo' | 'inprogress' | 'done' = 'todo';

  // --- Visualization counters ---
  renderCounter: { [status: string]: number } = { todo: 0, inprogress: 0, done: 0 };

  // Reset counters before each change detection cycle
  resetCounter() {
    this.renderCounter = { todo: 0, inprogress: 0, done: 0 };
  }

  // Called from template to increment and log render
  countRender(status: string, task: Task, index: number) {
    this.renderCounter[status]++;
    // For console log
    console.log(`Render: status=${status}, taskId=${task.id}, index=${index}`);
    return '';
  }

  addTask() {
    if (this.newTaskTitle.trim()) {
      this.tasks.push({
        id: nextId++,
        title: this.newTaskTitle,
        description: this.newTaskDesc,
        status: this.newTaskStatus
      });
      this.newTaskTitle = '';
      this.newTaskDesc = '';
      this.newTaskStatus = 'todo';
    }
  }

  removeTask(task: Task) {
    this.tasks = this.tasks.filter(t => t.id !== task.id);
  }

  moveTask(task: Task, status: 'todo' | 'inprogress' | 'done') {
    task.status = status;
  }

  toggleEdit(task: Task) {
    task.editing = !task.editing;
  }

  trackByTaskId(index: number, task: Task) {
    return task.id;
  }

  getTasksByStatus(status: 'todo' | 'inprogress' | 'done'): Task[] {
    return this.tasks.filter(t => t.status === status);
  }
}