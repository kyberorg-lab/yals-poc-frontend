import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {InfoComponent} from './components/info/info.component';

const routes: Routes = [
  {path: 'main', component: HomeComponent},
  {path: 'info', component: InfoComponent},
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: '**', component: HomeComponent} // TODO WildCard
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
