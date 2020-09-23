import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {MainComponent} from './components/main/main.component';
import {HomeComponent} from './components/home/home.component';
import {SigninComponent} from './components/sign/in/signin.component';
import {SignoutComponent} from './components/sign/out/signout.component';
import {ImprintComponent} from './components/imprint/imprint.component';
import {TermofuseComponent} from './components/termofuse/termofuse.component';
import {SignupComponent} from './components/sign/up/signup.component';
import {DashboardComponent} from './components/memberarea/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  {path: 'main', component: MainComponent},
  {path: 'home', component: HomeComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'signout', component: SignoutComponent},
  {path: 'imprint', component: ImprintComponent},
  {path: 'termofuse', component: TermofuseComponent},
  {path: 'dashboard', component: DashboardComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
