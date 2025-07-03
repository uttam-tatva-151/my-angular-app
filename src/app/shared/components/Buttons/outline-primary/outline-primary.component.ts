import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-btn-outline-primary',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './outline-primary.component.html',
  styleUrls: ['./outline-primary.component.css']
})
export class OutlinePrimaryButtonComponent {
  @Input() link?: string;
  @Input() label?: string;
  @Input() extraClasses?: string;
}
