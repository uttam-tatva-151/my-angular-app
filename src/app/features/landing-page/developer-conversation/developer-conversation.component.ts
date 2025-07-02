import { Component, AfterViewInit, QueryList, ViewChildren, ElementRef } from '@angular/core';

@Component({
  selector: 'app-developer-conversation',
  standalone: true,
  templateUrl: './developer-conversation.component.html',
  styleUrls: ['./developer-conversation.component.css']
})
export class DeveloperConversationComponent implements AfterViewInit {
  @ViewChildren('chatBubble') chatBubbles!: QueryList<ElementRef<HTMLDivElement>>;

  chatBubbleIdx = 0;

  ngAfterViewInit() {
    this.hideAllChatBubbles();
    setTimeout(() => {
      this.showChatBubblesUpTo(0);
      this.chatBubbleIdx = 1;
      setTimeout(() => this.chatLoop(), 2250);
    }, 1200);
  }

  hideAllChatBubbles() {
    this.chatBubbles.forEach(bubble => bubble.nativeElement.classList.remove('visible'));
  }
  showChatBubblesUpTo(idx: number) {
    this.chatBubbles.forEach((bubble, i) => {
      if (i <= idx) bubble.nativeElement.classList.add('visible');
      else bubble.nativeElement.classList.remove('visible');
    });
  }
  chatLoop() {
    if (this.chatBubbleIdx === 0) {
      this.hideAllChatBubbles();
      setTimeout(() => {
        this.showChatBubblesUpTo(this.chatBubbleIdx);
        this.chatBubbleIdx++;
        setTimeout(() => this.chatLoop(), 2250);
      }, 600);
    } else {
      this.showChatBubblesUpTo(this.chatBubbleIdx);
      this.chatBubbleIdx++;
      if (this.chatBubbleIdx >= this.chatBubbles.length) {
        this.chatBubbleIdx = 0;
      }
      setTimeout(() => this.chatLoop(), 2250);
    }
  }
}