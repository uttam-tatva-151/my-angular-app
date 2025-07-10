import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, ChangeDetectorRef, DoCheck, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

export interface Contact {
  id: number;
  name: string;
  online: boolean;
  lastMessage: string;
}

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit, OnDestroy, DoCheck {
  @Input() contacts!: Contact[];
  @Input() status$!: Observable<{ [id: number]: boolean }>;
  @Input() cdStrategy: 'Default' | 'OnPush' = 'Default';

  @Output() action = new EventEmitter<string>();

  statuses: { [id: number]: boolean } = {};
  private subs: Subscription[] = [];

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    if (this.status$) {
      const s = this.status$.subscribe(statuses => {
        this.statuses = statuses;
        if (this.cdStrategy === 'OnPush') this.cdr.markForCheck();
      });
      this.subs.push(s);
    }
  }

  ngDoCheck() {
    console.log(`[${this.cdStrategy}] ContactComponent Checked`);
  }

  // Mutate first contact's name (in-place)
  mutateContactName() {
    if (this.contacts.length) {
      this.contacts[0].name += '!';
      // if (this.cdStrategy === 'OnPush') this.cdr.markForCheck();
      this.action.emit('Mutated contact name (in-place)');
    }
  }

  // Replace first contact (new object, new array reference)
  replaceContact() {
    if (this.contacts.length) {
      const updated = { ...this.contacts[0], name: this.contacts[0].name + '!' };
      this.contacts = [updated, ...this.contacts.slice(1)];
      this.action.emit('Replaced contact (new object, new array)');
    }
  }

  manualDetectChanges() {
    this.cdr.detectChanges();
    this.action.emit('Manual detectChanges() triggered');
  }

  ngOnDestroy() {
    this.subs.forEach(s => s.unsubscribe());
  }
}