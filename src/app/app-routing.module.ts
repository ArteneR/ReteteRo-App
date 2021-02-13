import { NgModule }                     from '@angular/core';
import { Routes, Router, RouterModule } from '@angular/router';

import { PageNotFoundComponent }        from '@app/page-not-found.component/page-not-found.component';
import { CheatSheetComponent }          from '@app/_cheat-sheet.component/cheat-sheet.component';


const debugRouting = false;

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@app/main.module/main.module').then(m => m.MainModule),
    data: {
      breadcrumb: null
    }
  },
  {
    path: 'admin',
    loadChildren: () => import('@app/admin.module/admin.module').then(m => m.AdminModule),
    data: {
      breadcrumb: null
    }
  },
  {
    path: 'cheat-sheet',
    component: CheatSheetComponent,
    data: {
      breadcrumb: null
    }
  },
  { 
    path: '**', 
    component: PageNotFoundComponent,
    data: {
      breadcrumb: null
    }
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing:             debugRouting,    // <-- debugging purposes only
      scrollPositionRestoration: 'enabled'        // In order to scroll to top of the page when navigating
    })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { 
    constructor(router: Router) {
        if (debugRouting) {
          // Use a custom replacer to display function names in the route configs:
          const replacer = (key, value) => (typeof value === 'function') ? value.name : value;
          console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
        }
    }
}
