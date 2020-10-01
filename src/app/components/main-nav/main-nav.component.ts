import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
  private pMobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.pMobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.pMobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this.pMobileQueryListener);
  }

}
