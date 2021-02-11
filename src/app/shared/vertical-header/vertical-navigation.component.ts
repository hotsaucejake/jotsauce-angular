import { Component, AfterViewInit, EventEmitter, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-vertical-navigation',
  templateUrl: './vertical-navigation.component.html'
})
export class VerticalNavigationComponent {
  @Output() toggleSidebar = new EventEmitter<void>();

  public config: PerfectScrollbarConfigInterface = {};
  public showSearch = false;

  constructor(
    private authService: AuthService,
    private modalService: NgbModal,
    private router: Router) { }


  public async logout(): Promise<void> {
    const resp = await this.authService.logout();

    if (!!resp) {
      this.router.navigateByUrl('/auth/login', { replaceUrl: true });
    }
  }
}
