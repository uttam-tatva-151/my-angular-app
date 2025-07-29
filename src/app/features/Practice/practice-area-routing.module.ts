import { Routes } from '@angular/router';
import { SignalsComponent } from './signals/signals.component';
import { PracticeAreaComponent } from './practice-area/practice-area.component';
import { ProductsComponent } from './products/products.component';
import { RxjsDemoComponent } from './rxjs-demo/rxjs-demo.component';
import { TaskBoardComponent } from './task-board/task-board.component';
import { PortfolioParentComponent } from './portfoliyo-parent-module/portfoliyo-parent-module.component';
import { ContactParentComponent } from './contact-parent/contact-parent.component';
import { ToDoComponent } from './to-do/to-do.component';
import { GenericListDemoComponent } from './generic-list-demo/generic-list-demo.component';
import { GenericGridDemoComponent } from './generic-grid-demo/generic-grid-demo.component';
import { GenericPaginationFilterDemoComponent } from './generic-pagination-filter-demo/generic-pagination-filter-demo.component';
import { GenericModalDemoComponent } from './generic-modal-demo/generic-modal-demo.component';
import { GenericTabsDemoComponent } from './generic-tabs-demo/generic-tabs-demo.component';
import { ImportedGenericInputFieldDemoComponent } from './imported-generic-input-field-demo/imported-generic-input-field-demo.component';
import { GenericSidebarDemoComponent } from './generic-sidebar-demo/generic-sidebar-demo.component';

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
      { path: 'change-detection-with-to-do', component: ToDoComponent},
      { path: 'generic-list', component: GenericListDemoComponent},
      { path: 'generic-grid', component: GenericGridDemoComponent},
      { path: 'generic-pagination-filter', component: GenericPaginationFilterDemoComponent},
      { path: 'generic-modal', component: GenericModalDemoComponent},
      { path: 'generic-tabs', component: GenericTabsDemoComponent},
      { path: 'imported-generic-input-field-demo', component: ImportedGenericInputFieldDemoComponent},
      { path: 'imported-generic-sidebar-demo', component: GenericSidebarDemoComponent}
    ]
  }
];