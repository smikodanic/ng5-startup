import { NgModule, InjectionToken } from '@angular/core';


// modules
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutesModule } from './app-routes.module';


// components
import { AppComponent } from './app.component';


// services
import { CookiesService } from 'ng5plus-cookies';
import { AuthService } from 'ng5plus-auth';
import { JwtTokenInterceptor } from 'ng5plus-auth';
import { GlobalsService } from './ng/services/globals.service';


import { environment } from '../environments/environment';
// export const API_BASE_URL = new InjectionToken<string>('');



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutesModule,
  ],
  providers: [
    // all required for ng5plus-auth
    CookiesService,
    AuthService,
    { provide: 'API_BASE_URL', useValue: environment.api_base_url },
    { provide: 'AUTH_URLS', useValue: environment.auth_urls },
    { provide: 'COOKIE_OPTS', useValue: environment.cookie_options },
    JwtTokenInterceptor,
    { provide: HTTP_INTERCEPTORS, useClass: JwtTokenInterceptor, multi: true },

    GlobalsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
