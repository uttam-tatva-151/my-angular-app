import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';


export interface GridColumn<T = any> {
  header: string;
  field: keyof T;
  width?: string;
  cellTemplate?: TemplateRef<any>;
}

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent<T = any> {

  @Input() columns: GridColumn<T>[] = [];
  @Input() items: T[] = [];
  @Input() loading = false;
  @Input() error: string = '';
  @Input() selectedRow?: T;
  @Output() rowSelected = new EventEmitter<T>();
  @Output() cellClicked = new EventEmitter<{row: T, col: GridColumn<T> }>();

  selectRow(row: T) {
    this.selectedRow = row;
    this.rowSelected.emit(row);
  }

  onCellClick(row: T, col: GridColumn<T>) {
    this.cellClicked.emit({ row, col });
  }

  isSelected(row: T): boolean {
    return !!this.selectedRow && (this.selectedRow === row ||
      (row && JSON.stringify(this.selectedRow) === JSON.stringify(row)));
  }

}
