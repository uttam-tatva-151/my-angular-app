import { Component } from '@angular/core';
import { ListComponent } from "../../../shared/components/list/list.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-generic-list-demo',
  standalone: true,
  imports: [ListComponent, CommonModule],
  templateUrl: './generic-list-demo.component.html',
  styleUrls: ['./generic-list-demo.component.css']
})
export class GenericListDemoComponent {
  users = [
    { name: 'Alice', email: 'alice@gmail.com' },
    { name: 'Bob', email: 'bob@gmail.com' }
  ];
  products = [
    { name: 'Laptop', price: 1200, inStock: true },
    { name: 'Phone', price: 800, inStock: false }
  ];
  fruits = ['Apple', 'Banana', 'Mango'];
  tasks = [
    { title: 'Design UI', status: 'Done' },
    { title: 'Write Tests', status: 'Pending' }
  ];
  notifications = [
    { type: 'info', message: 'Welcome!' },
    { type: 'error', message: 'Failed to load data.' }
  ];

  loading = false;
  error = '';
  selectedUser: any;
  selectedProduct: any;
  selectedFruit: any;
  selectedTask: any;
  selectedNotification: any;

  // User list events
  onUserSelected(user: any) {
    this.selectedUser = user;
    console.log('User selected:', user);
  }
  onUserClicked(user: any) {
    alert('User clicked: ' + user.name);
  }

  // Product list events
  onProductSelected(product: any) {
    this.selectedProduct = product;
    console.log('Product selected:', product);
  }
  onProductClicked(product: any) {
    alert(`Product clicked: ${product.name} ($${product.price})`);
  }

  // Fruit list events
  onFruitSelected(fruit: string) {
    this.selectedFruit = fruit;
    console.log('Fruit selected:', fruit);
  }
  onFruitClicked(fruit: string) {
    alert(`Fruit clicked: ${fruit}`);
  }

  // Task list events
  onTaskSelected(task: any) {
    this.selectedTask = task;
    console.log('Task selected:', task);
  }
  onTaskClicked(task: any) {
    alert(`Task clicked: ${task.title} [${task.status}]`);
  }

  // Notification list events
  onNotificationSelected(notification: any) {
    this.selectedNotification = notification;
    console.log('Notification selected:', notification);
  }
  onNotificationClicked(notification: any) {
    alert(`Notification clicked: ${notification.type.toUpperCase()} - ${notification.message}`);
  }
}