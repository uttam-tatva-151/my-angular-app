import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PaginationComponent } from "../../../shared/components/pagination/pagination.component";
import { FilterComponent } from "../../../shared/components/filter/filter.component";

@Component({
  selector: 'app-generic-pagination-filter-demo',
  standalone: true,
  imports: [CommonModule, PaginationComponent, FilterComponent],
  templateUrl: './generic-pagination-filter-demo.component.html',
  styleUrls: ['./generic-pagination-filter-demo.component.css']
})
export class GenericPaginationFilterDemoComponent {
  currentPage1 = 1;
  currentPage2 = 1;
  currentPage3 = 1;
  currentPage4 = 1;

  totalItems1 = 32;
  totalItems2 = 12;
  totalItems3 = 96;
  totalItems4 = 0;

  onFilterChange(event: any, example: number) {
    // Logic for updating data based on filters; for demo, just log
    console.log(`Filter changed for Example ${example}:`, event);
    // For edge case demonstration, you might set totalItems4 = 0
  }

  onPageChange(page: number, example: number) {
    switch (example) {
      case 1: this.currentPage1 = page; break;
      case 2: this.currentPage2 = page; break;
      case 3: this.currentPage3 = page; break;
      case 4: this.currentPage4 = page; break;
    }
    console.log(`Page changed for Example ${example}:`, page);
  }
}