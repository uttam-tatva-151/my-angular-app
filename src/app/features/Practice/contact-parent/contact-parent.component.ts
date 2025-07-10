import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Contact, ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-contact-parent',
  standalone: true,
  imports: [ContactComponent],
  templateUrl: './contact-parent.component.html'
})
export class ContactParentComponent {
  contacts: Contact[] = [
    { id: 1, name: 'Alice', online: true, lastMessage: 'See you soon!' },
    { id: 2, name: 'Bob', online: false, lastMessage: 'OK!' }
  ];

  status$ = new BehaviorSubject<{ [id: number]: boolean }>({
    1: true,
    2: false
  });

  simulateStatusChange() {
    // Toggle each contact's status
    this.status$.next({
      1: !this.status$.value[1],
      2: !this.status$.value[2]
    });
  }

  replaceAllContacts() {
    this.contacts = this.contacts.map(c => ({ ...c, lastMessage: 'Updated!' }));
  }

  mutateAllContacts() {
    this.contacts.forEach(c => c.lastMessage = 'Changed!');
  }

  onAction(type: string, event: string) {
    alert(`[${type}] ${event}`);
  }
}