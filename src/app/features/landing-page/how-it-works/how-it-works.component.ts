import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-how-it-works',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.css']
})
export class HowItWorksComponent {
  steps = [
    { num: 1, title: 'Sign Up', desc: 'Create your free CashCanvas account in seconds.' },
    { num: 2, title: 'Add Expenses', desc: 'Log your expenses easily and instantly.' },
    { num: 3, title: 'Track & Grow', desc: 'Watch your savings grow with smart analytics!' }
  ];
}
