import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { RouteInfo } from './horizontal-sidebar.metadata';
import { ROUTES } from './horizontal-menu-items';


@Injectable({
    providedIn: 'root'
})
export class HorizontalSidebarService {

    public screenWidth = 0;
    public collapseSidebar = false;
    public fullScreen = false;

    MENUITEMS: RouteInfo[] = ROUTES;

    items = new BehaviorSubject<RouteInfo[]>(this.MENUITEMS);

    constructor() {
    }
}
