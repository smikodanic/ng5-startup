import { NgModule, InjectionToken } from '@angular/core';

// modules
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutesModule } from './app-routes.module';

// components
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';

// services
import { AuthService } from './ng/services/auth';
import { CookiesService } from 'ng5plus-cookies';
import { GlobalsService } from './ng/services/globals.service';

import { environment } from '../environments/environment';
// export const API_BASE_URL = new InjectionToken<string>('');


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
    { provide: 'API_BASE_URL', useValue: environment.api_base_url },
    { provide: 'AUTH_URLS', useValue: environment.auth_urls },
    { provide: 'COOKIE_OPTS', useValue: environment.cookie_options },
    CookiesService,

    GlobalsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
