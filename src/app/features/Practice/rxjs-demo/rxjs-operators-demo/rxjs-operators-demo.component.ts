import { Component } from '@angular/core';
import { map, filter, switchMap, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Message, RxjsDemoService } from '../rxjs-demo.service';
import { Observable, Subject } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-rxjs-operators-demo',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './rxjs-operators-demo.component.html',
  styleUrls: ['./rxjs-operators-demo.component.css']
})
export class RxjsOperatorsDemoComponent {
  searchResults$: Observable<Message[]>;
  searchInput = new Subject<string>();
  lastSearchTerm = '';

  constructor(private rxjsService: RxjsDemoService) {
    // Use switchMap to run new "search" on each input
    this.searchResults$ = this.searchInput.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      filter(term => term.length > 1),
      switchMap(user =>
        this.rxjsService.searchUserMessages(user).pipe(
          map(messages => messages.map(m => ({
            ...m,
            content: m.content.toUpperCase()
          })))
        )
      )
    );
  }

  onSearchInput(term: string) {
    this.lastSearchTerm = term;
    this.searchInput.next(term);
  }
}