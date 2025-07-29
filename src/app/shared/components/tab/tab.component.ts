import { CommonModule } from '@angular/common';
import { Component, ContentChildren, QueryList, AfterContentInit, Input } from '@angular/core';
@Component({
  selector: 'app-tab',
  standalone: true,
  imports: [CommonModule],
  template: `<ng-content *ngIf="active"></ng-content>`
})
export class TabComponent {
  @Input() label!: string;
  @Input() icon?: string;
  @Input() disabled = false;
  active = false;
}
@Component({
  selector: 'app-tab',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabsComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;
  @Input() tabType: 'line' | 'pill' | 'card' = 'line';
  @Input() uniqueDesign: boolean = true;
  selectedIdx = 0;

  ngAfterContentInit() {
    this.selectTab(this.selectedIdx);
  }

  selectTab(idx: number) {
    this.tabs.forEach((tab, i) => tab.active = i === idx && !tab.disabled);
    this.selectedIdx = idx;
  }
}
