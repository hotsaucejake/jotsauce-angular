import {
  Component,
  Input,
  OnDestroy,
  Inject,
  ViewEncapsulation
} from '@angular/core';
import {
  Router,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SpinnerComponent implements OnDestroy {
  public isSpinnerVisible = true;

  @Input() public backgroundColor = 'rgba(0, 115, 170, 0.69)';

  constructor(
    private router: Router,
    @Inject(DOCUMENT) private document: Document
  ) {
    console.log('app-spinner');
    this.router.events.subscribe(
      event => {
        console.log(event);
        if (event instanceof NavigationStart) {
          this.isSpinnerVisible = true;
          console.log('NavigationStart');
        } else if (
          event instanceof NavigationEnd ||
          event instanceof NavigationCancel ||
          event instanceof NavigationError
        ) {
          this.isSpinnerVisible = false;
          console.log('NavigationEnd');
        }
      },
      () => {
        this.isSpinnerVisible = false;
        console.log('otherwise');
      }
    );
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    this.isSpinnerVisible = false;
  }
}
