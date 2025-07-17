import { Component, EventEmitter, Input, Output, TemplateRef, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent<T = any> implements OnInit, OnChanges {
  @Input() items: T[] = [];
  @Input() loading = false;
  @Input() error: string = '';
  @Input() itemTemplate?: TemplateRef<any>;
  @Input() selectedItem?: T;
  @Output() itemSelected = new EventEmitter<T>();
  @Output() itemClicked = new EventEmitter<T>();

  ngOnInit() {
    // At this point, items may still be []
    console.log('ListComponent ngOnInit items:', this.items);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['items']) {
      console.log('ListComponent ngOnChanges items:', this.items);
    }
  }

  selectItem(item: T) {
    this.selectedItem = item;
    this.itemSelected.emit(item);
  }

  onItemClick(item: T) {
    this.itemClicked.emit(item);
  }

  isSelected(item: T): boolean {
    return this.selectedItem === item ||
      (this.selectedItem != null && item != null && JSON.stringify(this.selectedItem) === JSON.stringify(item));
  }
}