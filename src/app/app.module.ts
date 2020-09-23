import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {APP_BASE_HREF} from '@angular/common';
import {AppRoutingModule} from './app-routing.module';
import {ErrorHandlingModule} from './error-handling/error-handling.module';
import {ServerErrorInterceptor} from './interceptors/server-error.interceptor';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainComponent } from './components/main/main.component';
import { BodyComponent } from './components/body/body.component';
import { HomeComponent } from './components/home/home.component';
import { ImprintComponent } from './components/imprint/imprint.component';
import { SignoutComponent } from './components/sign/out/signout.component';
import { SignupComponent } from './components/sign/up/signup.component';
import { SigninComponent } from './components/sign/in/signin.component';
import { TermofuseComponent } from './components/termofuse/termofuse.component';
import { DashboardComponent } from './components/memberarea/dashboard/dashboard.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ErrorHandlingModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    MainComponent,
    NavbarComponent,
    BodyComponent,
    HomeComponent,
    ImprintComponent,
    SignoutComponent,
    SignupComponent,
    SigninComponent,
    TermofuseComponent,
    DashboardComponent,
  ],
  bootstrap:    [ MainComponent ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' },
    { provide: HTTP_INTERCEPTORS, useClass: ServerErrorInterceptor, multi: true }
  ]
})
export class AppModule { }
