import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SubmitComponent } from "../../../shared/components/Buttons/submit/submit.component";

@Component({
  selector: 'app-practice-area',
  standalone: true,
  imports: [RouterModule, CommonModule, SubmitComponent],
  templateUrl: './practice-area.component.html',
  styleUrls: ['./practice-area.component.css']
})
export class PracticeAreaComponent {

  constructor( private router: Router) { }
  toPracticeArea(){
    this.router.navigate(['/practice-area']);
  }
  toRxJSDemo(){
    this.router.navigate(['/practice-area/rxjs-demo']);
  }
  toSignals(){
    this.router.navigate(['/practice-area/signals']);
  }
  toSignalStore(){
    this.router.navigate(['/practice-area/signal-store']);
  }
  toTrackBy(){
    this.router.navigate(['/practice-area/track-by']);
  }
  toChangeDetection(){
    this.router.navigate(['/practice-area/change-detection-with-to-do']);
  }
  toGenericList(){
    this.router.navigate(['/practice-area/generic-list']);
  }
  toGenericGrid(){
    this.router.navigate(['/practice-area/generic-grid']);
  }

}
