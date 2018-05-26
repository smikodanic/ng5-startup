import { NgModule } from '@angular/core';

// modules
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutesModule } from './app-routes.module';

// components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

// services
import { AuthService } from './ng/services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { GlobalsService } from './ng/services/globals.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutesModule,
  ],
  providers: [
    AuthService,
    CookieService,
    GlobalsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
