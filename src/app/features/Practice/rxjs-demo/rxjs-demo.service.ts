import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject, Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface Message {
  user: string;
  content: string;
  timestamp: Date;
}

@Injectable({ providedIn: 'root' })
export class RxjsDemoService {
  // --- Subjects ---
  private normalSubject = new Subject<Message>();
  private behaviorSubject = new BehaviorSubject<Message>(0 as unknown as Message); // initial value can be null or a default message
  private replaySubject = new ReplaySubject<Message>(3); // buffer last 3

  // --- Observables for UI ---
  readonly normal$ = this.normalSubject.asObservable();
  readonly behavior$ = this.behaviorSubject.asObservable();
  readonly replay$ = this.replaySubject.asObservable();

  // --- Simulated stream for switchMap demo ---
  searchUserMessages(user: string): Observable<Message[]> {
    // Simulate API search (replace with HttpClient in real app)
    return of(this._allMessages.filter(m => m.user === user)).pipe(delay(400));
  }

  // --- Internal message log ---
  private _allMessages: Message[] = [];

  // --- Message utilities ---
  sendMessage(user: string, content: string) {
    const msg: Message = { user, content, timestamp: new Date() };
    this._allMessages.push(msg);
    this.normalSubject.next(msg);
    this.behaviorSubject.next(msg);
    this.replaySubject.next(msg);
  }

  getAllMessages(): Message[] {
    return this._allMessages;
  }
}