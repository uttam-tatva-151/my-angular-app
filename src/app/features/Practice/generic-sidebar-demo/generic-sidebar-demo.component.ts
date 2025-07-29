import { Component, OnInit } from '@angular/core';
import { GenericSidebar } from "../../../shared/components/sidebar/sidebar.component";
import { SidebarConfig, SidebarMenuItem } from '../../../core/models/SidebarConfig';
import { CURRENT_USER, SIDEBAR_CONFIG, SIDEBAR_MENU } from '../../../core/models/sidebar-demo-config';

@Component({
  selector: 'app-generic-sidebar-demo',
  standalone: true,
  templateUrl: './generic-sidebar-demo.component.html',
  styleUrls: ['./generic-sidebar-demo.component.css'],
  imports: [GenericSidebar]
})
export class GenericSidebarDemoComponent {

sidebarConfig = SIDEBAR_CONFIG;
sidebarMenu = SIDEBAR_MENU;
currentUser = CURRENT_USER;
}
