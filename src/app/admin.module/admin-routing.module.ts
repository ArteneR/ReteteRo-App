import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent }       from './admin.component/admin.component';


const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'login',
        loadChildren: () => import('./login.module/login.module').then(m => m.LoginModule)
      },
      {
        path: '',
        // canActivateChild: [AuthGuard],
        children: [
          {
            path: 'recipes',
            loadChildren: () => import('./recipes.module/recipes.module').then(m => m.RecipesModule)
          },
          {
            path: 'users',
            loadChildren: () => import('./users.module/users.module').then(m => m.UsersModule)
          }
        ]
      }
    ]
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
