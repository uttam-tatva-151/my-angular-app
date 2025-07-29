import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { SidebarConfig, SidebarMenuItem } from '../../../core/models/SidebarConfig';

@Component({
  selector: 'app-generic-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule]
})
export class GenericSidebar implements OnInit {
  @Input() config!: SidebarConfig;
  @Input() menu!: SidebarMenuItem[];
  @Input() user: any;

  collapsed: boolean = false;

  ngOnInit() {
    this.collapsed = this.config.collapsed;
  }

  toggleCollapse() {
    this.collapsed = !this.collapsed;
    if (this.config.rememberState) {
      window.localStorage.setItem('sidebar-collapsed', this.collapsed ? '1' : '0');
    }
  }
  toggleDropdown(item: SidebarMenuItem) {
    item.expanded = !item.expanded;
  }
  handleLinkClick(item: SidebarMenuItem, event: MouseEvent) {
    if (item.disabled) {
      event.preventDefault();
      return;
    }
    if (item.onClick) {
      item.onClick(item);
      event.preventDefault();
    }
    // For external links, let browser handle if no onClick
    // For routerLink, Angular handles navigation
  }

  canShow(item: SidebarMenuItem): boolean {
    if (typeof item.show === 'function') {
      return item.show(this.user);
    }
    if (typeof item.show === 'boolean') {
      return item.show;
    }
    if (item.role && this.user?.role) {
      return item.role.includes(this.user.role);
    }
    return true;
  }

  getLinkClass(item: SidebarMenuItem): any {
    return {
      active: !!item.active,
      disabled: !!item.disabled,
      [item.customClass || '']: !!item.customClass
    };
  }
}