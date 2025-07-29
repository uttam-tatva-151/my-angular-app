import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export interface FilterOption {
  key: string;
  label: string;
  type: 'text' | 'select' | 'checkbox';
  options?: { label: string; value: any }[];
}


@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  @Input() filters: FilterOption[] = [];
  @Input() sortOptions: { label: string; value: string }[] = [];
  @Output() filterChange = new EventEmitter<any>();

  filterValues: any = {};
  searchQuery = '';
  selectedSort = '';

  onFilterChange() {
    this.filterChange.emit({
      ...this.filterValues,
      search: this.searchQuery,
      sort: this.selectedSort
    });
  }

}
