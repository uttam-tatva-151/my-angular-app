import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-snapshots',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './snapshots.component.html',
  styleUrls: ['./snapshots.component.css']
})
export class SnapshotsComponent {
  snapshots = [
    {
      img: 'assets/images/landing-page/mockup_expense_entry.png',
      alt: 'Expense Entry',
      caption: 'Add expenses in seconds with smart suggestions.'
    },
    {
      img: 'assets/images/landing-page/mockup_budget.png',
      alt: 'Budget Setup',
      caption: 'Set up monthly budgets and track progress visually.'
    },
    {
      img: 'assets/images/landing-page/mockup_reports.png',
      alt: 'Reports',
      caption: 'Detailed reports to make smarter decisions.'
    }
  ];
}
