import { CommonModule } from '@angular/common';
import { AfterContentInit, Component, ContentChild, EventEmitter, HostListener, Input, Output, TemplateRef } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements AfterContentInit {
  @Input() isOpen: boolean = false;
  @Input() title?: string;
  @Input() width: string = '500px';
  @Input() showClose: boolean = true;
  @Input() customClass: string = '';
  @Output() closed = new EventEmitter<void>();

  @ContentChild('footer') footerTemplate?: TemplateRef<any>;
  showFooter: boolean = false;

  ngAfterContentInit() {
    this.showFooter = !!this.footerTemplate;
  }

  closeModal() {
    this.isOpen = false;
    this.closed.emit();
  }

  @HostListener('document:keydown.escape', ['$event'])
  onEsc(event: KeyboardEvent | Event) {
    if (this.isOpen) this.closeModal();
  }
}