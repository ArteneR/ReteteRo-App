import { ModuleWithProviders, NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule }                                   from '@angular/common';
import { HTTP_INTERCEPTORS }                              from '@angular/common/http';

import { AuthJwtInterceptor }                             from '@app/_auth/auth-jwt.interceptor';
import { AuthService }                                    from '@app/_auth/auth.service';
import { appInitializer }                                 from '@app/_helpers/app.initializer';


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
            { provide: APP_INITIALIZER, useFactory: appInitializer, multi: true, deps: [AuthService] },
            { provide: HTTP_INTERCEPTORS, useClass: AuthJwtInterceptor, multi: true }
          ]
        };
    }
}