import { Component, OnDestroy } from '@angular/core';
import { Message, RxjsDemoService } from '../rxjs-demo.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-behavior-vs-replay-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './behavior-vs-replay-demo.component.html',
  styleUrls: ['./behavior-vs-replay-demo.component.css']
})
export class BehaviorVsReplayDemoComponent implements OnDestroy {
  // Store messages received by each subscriber type
  behaviorMsgsA: Message[] = [];
  behaviorMsgsB: Message[] = [];
  replayMsgsA: Message[] = [];
  replayMsgsB: Message[] = [];
  behaviorSubA?: Subscription;
  behaviorSubB?: Subscription;
  replaySubA?: Subscription;
  replaySubB?: Subscription;

  // Track if subscribers are active
  isBehaviorASubscribed = false;
  isBehaviorBSubscribed = false;
  isReplayASubscribed = false;
  isReplayBSubscribed = false;

  // Track sequence of sent messages
  sentMessages: Message[] = [];

  constructor(private rxjsService: RxjsDemoService) {}

  // Send a test message into all subjects
  sendTestMessage(content: string) {
    this.rxjsService.sendMessage('DemoUser', content + ' @' + new Date().toLocaleTimeString());
    // Keep our own log for the demo
    this.sentMessages = this.rxjsService.getAllMessages();
  }

  // Subscribe A and B to BehaviorSubject
  subscribeBehaviorA() {
    if (!this.isBehaviorASubscribed) {
      this.isBehaviorASubscribed = true;
      this.behaviorSubA = this.rxjsService.behavior$.subscribe(msg => {
        if (msg) this.behaviorMsgsA.push(msg);
      });
    }
  }
  subscribeBehaviorB() {
    if (!this.isBehaviorBSubscribed) {
      this.isBehaviorBSubscribed = true;
      this.behaviorSubB = this.rxjsService.behavior$.subscribe(msg => {
        if (msg) this.behaviorMsgsB.push(msg);
      });
    }
  }

  // Subscribe A and B to ReplaySubject
  subscribeReplayA() {
    if (!this.isReplayASubscribed) {
      this.isReplayASubscribed = true;
      this.replaySubA = this.rxjsService.replay$.subscribe(msg => {
        this.replayMsgsA.push(msg);
      });
    }
  }
  subscribeReplayB() {
    if (!this.isReplayBSubscribed) {
      this.isReplayBSubscribed = true;
      this.replaySubB = this.rxjsService.replay$.subscribe(msg => {
        this.replayMsgsB.push(msg);
      });
    }
  }

  // Unsubscribe all for cleanup
  ngOnDestroy() {
    this.behaviorSubA?.unsubscribe();
    this.behaviorSubB?.unsubscribe();
    this.replaySubA?.unsubscribe();
    this.replaySubB?.unsubscribe();
  }
}