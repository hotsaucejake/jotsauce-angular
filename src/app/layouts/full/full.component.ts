import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { AppSettings } from 'src/app/core/interfaces/app/app-settings.interface';

@Component({
  selector: 'app-full-layout',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.scss']
})
export class FullComponent implements OnInit {
  public perfectScrollbar: PerfectScrollbarConfigInterface = {};

  constructor(public router: Router) {
    this.innerWidth = window.innerWidth;
    this.defaultSidebar = 'full';
  }

  public isCollapsed = false;

  public innerWidth: number;
  public defaultSidebar: string;

  public showMobileMenu = false;
  public expandLogo = false;

  public options: AppSettings = {
    theme: 'dark', // two possible values: light, dark
    direction: 'ltr', // two possible values: ltr, rtl
    layout: 'vertical', // two possible values: vertical, horizontal
    sidebarType: 'full', // four possible values: full, iconbar, overlay, mini-sidebar
    sidebarPosition: 'fixed', // two possible values: fixed, absolute
    headerPosition: 'fixed', // two possible values: fixed, absolute
    boxed: 'full', // two possible values: full, boxed
    navbarBackground: 'skin5', // six possible values: skin(1/2/3/4/5/6)
    sidebarBackground: 'skin3', // six possible values: skin(1/2/3/4/5/6)
    logoBackground: 'skin3' // six possible values: skin(1/2/3/4/5/6)
  };

  public logo(): void {
    this.expandLogo = !this.expandLogo;
  }

  public ngOnInit(): void {
    if (this.router.url === '/') {
      this.router.navigate(['/dashboard/dashboard1']);
    }
    this.defaultSidebar = this.options.sidebarType;
    this.handleSidebar();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: string): void {
    this.handleSidebar();
  }

  public updateSettings(updated: AppSettings): void {
    this.options = updated;
  }

  public toggleSidebarType(): void {
    switch (this.options.sidebarType) {
      case 'full':
      case 'iconbar':
        this.options.sidebarType = 'mini-sidebar';
        break;

      case 'overlay':
        this.showMobileMenu = !this.showMobileMenu;
        break;

      case 'mini-sidebar':
        if (this.defaultSidebar === 'mini-sidebar') {
          this.options.sidebarType = 'full';
        } else {
          this.options.sidebarType = this.defaultSidebar;
        }
        break;

      default:
    }
  }

  private handleSidebar(): void {
    this.innerWidth = window.innerWidth;
    switch (this.defaultSidebar) {
      case 'full':
      case 'iconbar':
        if (this.innerWidth < 1170) {
          this.options.sidebarType = 'mini-sidebar';
        } else {
          this.options.sidebarType = this.defaultSidebar;
        }
        break;

      case 'overlay':
        if (this.innerWidth < 767) {
          this.options.sidebarType = 'mini-sidebar';
        } else {
          this.options.sidebarType = this.defaultSidebar;
        }
        break;

      default:
    }
  }

}
