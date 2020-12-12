import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent }       from '@app/admin.module/admin.component/admin.component';
import { AuthGuard }            from '@app/_auth/auth.guard';


const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'login',
        loadChildren: () => import('@app/admin.module/login.module/login.module').then(m => m.LoginModule)
      },
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          {
            path: 'recipes',
            loadChildren: () => import('@app/admin.module/recipes.module/recipes.module').then(m => m.RecipesModule)
          },
          {
            path: 'users',
            loadChildren: () => import('@app/admin.module/users.module/users.module').then(m => m.UsersModule)
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
