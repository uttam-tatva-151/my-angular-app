import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, TemplateRef, ViewChild } from '@angular/core';
import { GridComponent } from "../../../shared/components/grid/grid.component";

export interface GridColumn<T = any> {
  header: string;
  field: keyof T;
  width?: string;
  cellTemplate?: TemplateRef<any>;
}

@Component({
  selector: 'app-generic-grid-demo',
  standalone: true,
  imports: [CommonModule, GridComponent],
  templateUrl: './generic-grid-demo.component.html',
  styleUrls: ['./generic-grid-demo.component.css']
})
export class GenericGridDemoComponent implements AfterViewInit {

  emptyUsers: any[] = [];
  emptyUserColumns: GridColumn[] = [
    { header: 'Name', field: 'name' },
    { header: 'Email', field: 'email' }
  ];

  // Edge case: Loading state
  loadingUsers: any[] = [];
  loading = true;

  // Edge case: Error state
  errorUsers: any[] = [];
  error = 'Failed to load users. Please try again later.';
  errorUserColumns: GridColumn[] = [
    { header: 'Name', field: 'name' },
    { header: 'Email', field: 'email' }
  ];

  // Edge case: Column with missing field
  incompleteUsers = [
    { name: 'Alice' }, // no email
    { email: 'bob@gmail.com' } // no name
  ];
  incompleteUserColumns: GridColumn[] = [
    { header: 'Name', field: 'name' },
    { header: 'Email', field: 'email' }
  ];

  // Edge case: Mixed types
  mixedItems = [
    { type: 'user', name: 'Alice', email: 'alice@gmail.com' },
    { type: 'product', name: 'Laptop', price: 1200, inStock: true }
  ];
  mixedColumns: GridColumn[] = [
    { header: 'Type', field: 'type' },
    { header: 'Name', field: 'name' },
    { header: 'Email', field: 'email' },
    { header: 'Price', field: 'price' },
    { header: 'Stock', field: 'inStock' }
  ];

  // Example 1: Users with avatar cell
  userColumns: GridColumn[] = [
    { header: 'Avatar', field: 'name', cellTemplate: undefined  },
    { header: 'Name', field: 'name' },
    { header: 'Email', field: 'email' }
  ];
  users = [
    { name: 'Alice', email: 'alice@gmail.com' },
    { name: 'Bob', email: 'bob@gmail.com' }
  ];
  selectedUser: any;

  // Example 2: Products with custom stock cell
  productColumns: GridColumn[] = [
    { header: 'Product', field: 'name' },
    { header: 'Price', field: 'price' },
    { header: 'Stock', field: 'inStock', cellTemplate: undefined }
  ];
  products = [
    { name: 'Laptop', price: 1200, inStock: true },
    { name: 'Phone', price: 800, inStock: false }
  ];
  selectedProduct: any;

  // Example 3: Tasks with status color
  taskColumns: GridColumn[] = [
    { header: 'Task', field: 'title' },
    { header: 'Status', field: 'status', cellTemplate: undefined }
  ];
  tasks = [
    { title: 'Design UI', status: 'Done' },
    { title: 'Write Tests', status: 'Pending' }
  ];
  selectedTask: any;

  // Example 4: Notifications with icon
  notificationColumns: GridColumn[] = [
    { header: 'Type', field: 'type', cellTemplate: undefined },
    { header: 'Message', field: 'message' }
  ];
  notifications = [
    { type: 'info', message: 'Welcome!' },
    { type: 'error', message: 'Failed to load data.' },
    { type: 'success', message: 'Operation completed.' }
  ];
  selectedNotification: any;

  // Example 5: Fruits as simple grid
  fruitColumns: GridColumn[] = [
    { header: 'Fruit', field: 'name', cellTemplate: undefined }
  ];
  fruits = [
    { name: 'Apple' },
    { name: 'Banana' },
    { name: 'Mango' }
  ];
  selectedFruit: any;

  // Templates for custom cells
  @ViewChild('avatarCell', { static: true }) avatarCellTpl!: TemplateRef<any>;
  @ViewChild('stockCell', { static: true }) stockCellTpl!: TemplateRef<any>;
  @ViewChild('statusCell', { static: true }) statusCellTpl!: TemplateRef<any>;
  @ViewChild('typeCell', { static: true }) typeCellTpl!: TemplateRef<any>;
  @ViewChild('fruitCell', { static: true }) fruitCellTpl!: TemplateRef<any>;

  ngAfterViewInit() {
    // Assign custom templates for columns
    this.userColumns[0].cellTemplate = this.avatarCellTpl;
    this.productColumns[2].cellTemplate = this.stockCellTpl;
    this.taskColumns[1].cellTemplate = this.statusCellTpl;
    this.notificationColumns[0].cellTemplate = this.typeCellTpl;
    this.fruitColumns[0].cellTemplate = this.fruitCellTpl;
  }

  // Event handlers for selection and cell click
  onUserRowSelected(user: any) { this.selectedUser = user; }
  onUserCellClicked(e: any) {
    alert(`Clicked cell: ${e.col.header} for user ${e.row.name ?? '[Unknown]'}`);
  }
  onProductRowSelected(product: any) { this.selectedProduct = product; }
  onProductCellClicked(e: any) {
    alert(`Clicked cell: ${e.col.header} for product ${e.row.name ?? '[Unknown]'}`);
  }
  onTaskRowSelected(task: any) { this.selectedTask = task; }
  onTaskCellClicked(e: any) {
    alert(`Clicked cell: ${e.col.header} for task ${e.row.title ?? '[Unknown]'}`);
  }
  onNotificationRowSelected(notification: any) { this.selectedNotification = notification; }
  onNotificationCellClicked(e: any) {
    alert(`Clicked cell: ${e.col.header} for notification [${e.row.message ?? '[Unknown]'}]`);
  }
  onFruitRowSelected(fruit: any) { this.selectedFruit = fruit; }
  onFruitCellClicked(e: any) {
    alert(`Clicked cell: ${e.col.header} for fruit ${e.row.name ?? '[Unknown]'}`);
  }

  // Edge case: Loading simulation
  simulateLoading() {
    this.loading = true;
    setTimeout(() => this.loading = false, 2000);
  }

}
