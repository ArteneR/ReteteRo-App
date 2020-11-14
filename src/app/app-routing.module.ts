import { NgModule }                     from '@angular/core';
import { Routes, Router, RouterModule } from '@angular/router';

import { PageNotFoundComponent }        from '@app/page-not-found.component/page-not-found.component';


const debugRouting = false;

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@app/main.module/main.module').then(m => m.MainModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('@app/admin.module/admin.module').then(m => m.AdminModule)
  },
  { 
    path: '**', 
    component: PageNotFoundComponent 
  }
];

const routesOptions = {
  enableTracing: debugRouting    // <-- debugging purposes only
};


@NgModule({
  imports: [
    RouterModule.forRoot(routes, routesOptions)
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
