import { BrowserModule }                        from '@angular/platform-browser';
import { ReactiveFormsModule }                  from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS }  from '@angular/common/http';
import { NgModule, APP_INITIALIZER }            from '@angular/core';

import { AuthJwtInterceptor }                   from '@app/_auth/auth-jwt.interceptor';
import { DataService }                          from '@app/_services/data.service/data.service';
import { AppRoutingModule }                     from '@app/app-routing.module';
import { AppComponent }                         from '@app/app.component';
import { PageNotFoundComponent }                from '@app/page-not-found.component/page-not-found.component';
import { AdminAuthService }                     from '@app/admin.module/_auth/admin-auth.service';
import { adminInitializer }                     from '@app/admin.module/_helpers/admin.initializer';
import { MainAuthService }                      from '@app/main.module/_auth/main-auth.service';
import { mainInitializer }                      from '@app/main.module/_helpers/main.initializer';


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
    { provide: APP_INITIALIZER, useFactory: adminInitializer, multi: true, deps: [AdminAuthService] },
    { provide: APP_INITIALIZER, useFactory: mainInitializer, multi: true, deps: [MainAuthService] },
    { provide: HTTP_INTERCEPTORS, useClass: AuthJwtInterceptor, multi: true }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
