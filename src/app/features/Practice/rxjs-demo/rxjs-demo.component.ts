import { Component, OnInit } from '@angular/core';
import { SubjectDemoComponent } from "./subject-demo/subject-demo.component";
import { BehaviorVsReplayDemoComponent } from "./behavior-vs-replay-demo/behavior-vs-replay-demo.component";
import { RxjsOperatorsDemoComponent } from "./rxjs-operators-demo/rxjs-operators-demo.component";

@Component({
  selector: 'app-rxjs-demo',
  standalone: true,
  templateUrl: './rxjs-demo.component.html',
  styleUrls: ['./rxjs-demo.component.css'],
  imports: [SubjectDemoComponent, BehaviorVsReplayDemoComponent, RxjsOperatorsDemoComponent]
})
export class RxjsDemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
