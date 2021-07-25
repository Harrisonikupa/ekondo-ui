import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoaderComponent } from './features/loader/loader.component';
import { LoaderInterceptor } from './shared/interceptors/loader.interceptor';
import { NotifyErrorInterceptor } from './shared/interceptors/notify-error.interceptor';
import { TokenizerInterceptor } from './shared/interceptors/tokenizer.interceptor';
import { LoaderService } from './shared/services/loader.service';
import { LoginModule } from './pages/login/login.module';
import { RegisterModule } from './pages/register/register.module';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { LayoutModule } from './layouts/layout.module';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LayoutModule,
    LoginModule,
    RegisterModule,
    DashboardModule
  ],
  providers: [
    LoaderService
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: LoaderInterceptor,
    //   multi: true,
    // },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: NotifyErrorInterceptor,
    //   multi: true
    // },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: TokenizerInterceptor,
    //   multi: true
    // },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
