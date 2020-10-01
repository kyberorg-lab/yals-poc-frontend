import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
  private readonly pMobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.pMobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.pMobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this.pMobileQueryListener);
  }
}
