import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-toast.component.html',
  styleUrls: ['./custom-toast.component.css']
})
export class CustomToastComponent {
  @Input() title = '';
  @Input() message = '';
  @Input() status: 'success' | 'error' | 'info' | 'warning' = 'info';
  @Input() errors: string[] = [];
  @Input() progressBar = false;

  @Output() close = new EventEmitter<void>();

  expand = false;

  get iconClass() {
    switch (this.status) {
      case 'success': return 'fa fa-check-circle text-success';
      case 'error': return 'fa fa-times-circle text-danger';
      case 'warning': return 'fa fa-exclamation-circle text-warning';
      default: return 'fa fa-info-circle text-info';
    }
  }

  onClose() {
    this.close.emit();
  }
}