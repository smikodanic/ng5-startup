import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// route modules
import { AppRoutesModule } from './app-routes.module';

// components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
