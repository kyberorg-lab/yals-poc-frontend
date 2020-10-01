import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './components/home-page/home-page.component';
import {InfoPageComponent} from './components/info-page/info-page.component';

const routes: Routes = [
  {path: 'main', component: HomePageComponent},
  {path: 'info', component: InfoPageComponent},
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: '**', component: InfoPageComponent} // TODO WildCard
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
