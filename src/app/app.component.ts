import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {Page} from './classes/page';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
  private readonly pMobileQueryListener: () => void;
  public readonly pages: Page[] = [
    {name: 'Home', route: 'main', icon: 'home'},
    {name: 'Info', route: 'info', icon: 'info'},
    {name: 'Some Page', route: 'void', icon: 'help'},
  ];

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.pMobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.pMobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this.pMobileQueryListener);
  }
}
