import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { practiceAreaRoutes } from './practice-area-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(practiceAreaRoutes)
  ]
})
export class PracticeAreaModule { }
