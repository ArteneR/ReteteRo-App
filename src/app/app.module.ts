import { BrowserModule }                        from '@angular/platform-browser';
import { ReactiveFormsModule }                  from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS }  from '@angular/common/http';
import { NgModule, APP_INITIALIZER }            from '@angular/core';

import { DataService }                          from '@app/_services/data.service/data.service';
import { AppRoutingModule }                     from '@app/app-routing.module';
import { AppComponent }                         from '@app/app.component';
import { PageNotFoundComponent }                from '@app/page-not-found.component/page-not-found.component';
import { adminInitializer }                     from '@app/admin.module/_helpers/admin.initializer';
import { AuthService }                          from '@app/admin.module/_auth/auth.service';
import { AuthErrorInterceptor }                 from '@app/admin.module/_auth/auth-error.interceptor';
import { AuthJwtInterceptor }                   from '@app/admin.module/_auth/auth-jwt.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    DataService,
    { provide: APP_INITIALIZER, useFactory: adminInitializer, multi: true, deps: [AuthService] },
    { provide: HTTP_INTERCEPTORS, useClass: AuthJwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthErrorInterceptor, multi: true }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
