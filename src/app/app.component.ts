import {Component, ViewChild} from '@angular/core';
import {Page} from './classes/page';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public readonly pages: Page[] = [
    {name: 'Home', route: 'main', icon: 'home'},
    {name: 'Info', route: 'info', icon: 'info'},
    {name: 'Some Page', route: 'void', icon: 'question'},
  ];

  @ViewChild('sidenav') private sideNav: any;

  onMenuItemClick(): void {
    this.sideNav.hide();
  }
}
