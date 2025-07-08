import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface ToastData {
  title: string;
  message: string;
  status: 'success' | 'error' | 'info' | 'warning';
  errors?: string[];
  progressBar?: boolean;
  duration?: number;
}

@Injectable({
  providedIn: 'root'
})
export class GlobalToastService {
  private toastSubject = new Subject<ToastData>();
  toast$ = this.toastSubject.asObservable();

  show(data: ToastData) {
    this.toastSubject.next(data);
  }
}