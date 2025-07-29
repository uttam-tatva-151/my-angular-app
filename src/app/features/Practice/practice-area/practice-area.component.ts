import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SubmitComponent } from "../../../shared/components/Buttons/submit/submit.component";
import { GenericButton } from 'generic-button';
import { GenericButtonModel } from '../../../core/models/GenericButtonModel';

@Component({
  selector: 'app-practice-area',
  standalone: true,
  imports: [RouterModule, CommonModule, SubmitComponent,GenericButton],
  templateUrl: './practice-area.component.html',
  styleUrls: ['./practice-area.component.css']
})
export class PracticeAreaComponent {

  isLoading = false;

  svgIcon: string = `
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="9" stroke="#4F8CFF" stroke-width="2"/>
      <path d="M6 10l2 2 4-4" stroke="#4F8CFF" stroke-width="2" fill="none"/>
    </svg>
  `;

  getButtonConfig(): GenericButtonModel {
    return {
      label: 'Imported Generic Components Demo',
      color: 'primary',
      size: 'large',
      rounded: true,
      outlined: false,
      loading: this.isLoading,   // This is reactive!
      ariaLabel: 'Go to next step',
      icon: this.svgIcon,
      iconPosition: 'left',
      elevation: 4,
      tooltip: 'Proceed to the next step',
      block: false,
      animation: 'bounce',
      customClass: 'light-theme-btn',
      style: {
        background: 'linear-gradient(90deg, #e3f0ff 0%, #f8faff 100%)',
        color: '#4F8CFF',
        boxShadow: '0 4px 24px 0 rgba(79,140,255,0.15)',
        border: '2px solid #4F8CFF'
      }
    };
  }

  onAction(event: Event): void {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      this.router.navigate(['/practice-area/imported-generic-input-field-demo']);
    }, 1200);
  }
  showSidebar(event: Event): void {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      this.router.navigate(['/practice-area/imported-generic-sidebar-demo']);
    }, 1200);
  }

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
  toGenericPaginationAndFilters(){
    this.router.navigate(['/practice-area/generic-pagination-filter']);
  }
  toGenericModal(){
    this.router.navigate(['/practice-area/generic-modal']);
  }
  toGenericTab(){
    this.router.navigate(['/practice-area/generic-tabs']);
  }

}
