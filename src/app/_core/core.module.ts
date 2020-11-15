import { ModuleWithProviders, NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule }                                   from '@angular/common';
import { HTTP_INTERCEPTORS }                              from '@angular/common/http';

import { AuthJwtInterceptor }                             from '@app/_auth/auth-jwt.interceptor';
import { AdminAuthService }                               from '@app/admin.module/_auth/admin-auth.service';
import { adminInitializer }                               from '@app/admin.module/_helpers/admin.initializer';
import { MainAuthService }                                from '@app/main.module/_auth/main-auth.service';
import { mainInitializer }                                from '@app/main.module/_helpers/main.initializer';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: []
})
export class CoreModule {
    static forRoot(): ModuleWithProviders<any> {
        return {
          ngModule: CoreModule,
          providers: [
            { provide: APP_INITIALIZER, useFactory: adminInitializer, multi: true, deps: [AdminAuthService] },
            { provide: APP_INITIALIZER, useFactory: mainInitializer, multi: true, deps: [MainAuthService] },
            { provide: HTTP_INTERCEPTORS, useClass: AuthJwtInterceptor, multi: true }
          ]
        };
    }
}