import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Message, RxjsDemoService } from '../rxjs-demo.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-subject-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './subject-demo.component.html',
  styleUrls: ['./subject-demo.component.css']
})
export class SubjectDemoComponent implements OnDestroy {
  messages: Message[] = [];
  sub: Subscription;

  constructor(private rxjsService: RxjsDemoService) {
    this.sub = this.rxjsService.normal$.subscribe(msg => {
      if (msg) this.messages.push(msg);
    });
  }

  send(user: string, content: string) {
    this.rxjsService.sendMessage(user, content);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}