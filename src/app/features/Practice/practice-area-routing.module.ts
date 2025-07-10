import { Routes } from '@angular/router';
import { SignalsComponent } from './signals/signals.component';
import { PracticeAreaComponent } from './practice-area/practice-area.component';
import { ProductsComponent } from './products/products.component';
import { RxjsDemoComponent } from './rxjs-demo/rxjs-demo.component';
import { TaskBoardComponent } from './task-board/task-board.component';
import { PortfolioParentComponent } from './portfoliyo-parent-module/portfoliyo-parent-module.component';
import { ContactParentComponent } from './contact-parent/contact-parent.component';
import { ToDoComponent } from './to-do/to-do.component';

export const practiceAreaRoutes: Routes = [
  {
    path: '',
    component: PracticeAreaComponent,
    children: [
      { path: 'signals', component:SignalsComponent  },
      { path: 'signal-store', component: ProductsComponent  },
      { path: 'rxjs-demo', component: RxjsDemoComponent},
      { path: 'track-by', component: TaskBoardComponent},
      { path: 'change-detection', component: PortfolioParentComponent},
      { path: 'change-detection-with-contacts', component: ContactParentComponent},
      { path: 'change-detection-with-to-do', component: ToDoComponent}
    ]
  }
];