import { Component, OnInit } from '@angular/core';
import { GlobalToastService, ToastData } from '../../../core/services/Toster/GlobalToaster.service';
import { CommonModule } from '@angular/common';
import { CustomToastComponent } from '../custom-toast/custom-toast.component';

@Component({
  selector: 'app-toast-container',
  standalone: true,
  imports: [CustomToastComponent,CommonModule],
  templateUrl: './toast-container.component.html',
  styleUrls: ['./toast-container.component.css'],
})
export class ToastContainerComponent implements OnInit {
  toast: ToastData | null = null;
  timeoutRef: any;

  constructor(private toastService: GlobalToastService) {}

  ngOnInit() {
    this.toastService.toast$.subscribe(t => {
      this.toast = t;
      clearTimeout(this.timeoutRef);
      this.timeoutRef = setTimeout(() => this.toast = null, t.duration ?? 7000);
    });
  }

  closeToast ()  {
    this.toast = null;
    clearTimeout(this.timeoutRef);
  }
}

  // // --- DUMMY TEST CASES FOR TOASTER ---
  // testToasterCases() {
  //   // Success (simple)
  //   this.toast.show({
  //     title: 'Success',
  //     message: 'Password reset link sent!',
  //     status: 'success',
  //     progressBar: true
  //   });

  //   // Error (with details)
  //   setTimeout(() => {
  //     this.toast.show({
  //       title: 'Error',
  //       message: 'Password reset failed.',
  //       status: 'error',
  //       errors: [
  //         'No account found for this email.',
  //         'Try again later.',
  //         'Check your internet connection.'
  //       ],
  //       progressBar: true
  //     });
  //   }, 1200);

  //   // Warning (no details)
  //   setTimeout(() => {
  //     this.toast.show({
  //       title: 'Warning',
  //       message: 'You are using a weak password. Please choose a stronger one.',
  //       status: 'warning'
  //     });
  //   }, 2400);

  //   // Info (long message)
  //   setTimeout(() => {
  //     this.toast.show({
  //       title: 'Information',
  //       message: 'Note: For your security, reset links expire after 30 minutes. If you did not request a reset, please ignore this email.',
  //       status: 'info',
  //       progressBar: true
  //     });
  //   }, 3600);

  //   // Error (long error list)
  //   setTimeout(() => {
  //     this.toast.show({
  //       title: 'Error',
  //       message: 'Multiple errors occurred:',
  //       status: 'error',
  //       errors: [
  //         'First error',
  //         'Second error',
  //         'Third error',
  //         'Fourth error',
  //         'Fifth error'
  //       ],
  //       progressBar: true
  //     });
  //   }, 5000);