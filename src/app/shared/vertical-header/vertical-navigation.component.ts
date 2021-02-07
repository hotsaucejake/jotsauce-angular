import { Component, AfterViewInit, EventEmitter, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-vertical-navigation',
  templateUrl: './vertical-navigation.component.html'
})
export class VerticalNavigationComponent implements AfterViewInit {
  @Output() toggleSidebar = new EventEmitter<void>();

  public config: PerfectScrollbarConfigInterface = {};
  public showSearch = false;

  constructor(
    private authService: AuthService,
    private modalService: NgbModal,
    private router: Router,
    private translate: TranslateService) {
    translate.setDefaultLang('en');
  }
  ngAfterViewInit(): void {
    // throw new Error('Method not implemented.');
  }

  public async logout(): Promise<void> {
    const resp = await this.authService.logout();

    if (!!resp) {
      this.router.navigateByUrl('/auth/login', { replaceUrl: true });
    }
  }
}
