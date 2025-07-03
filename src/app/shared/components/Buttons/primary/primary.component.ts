import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-btn-primary',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './primary.component.html',
  styleUrls: ['./primary.component.css']
})
export class PrimaryButtonComponent{
  @Input() iconClass?:string;
  @Input() link?: string;
  @Input() label?: string;
  @Input() extraClasses?: string;

}
