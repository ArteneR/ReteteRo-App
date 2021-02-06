import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent }       from '@app/main.module/users.module/users.component/users.component';


const usersRoutes: Routes = [
  {
    path: '',
    component: UsersComponent,
    data: {
      breadcrumb: null
    }
  },
  {
    path: 'details/:id',
    loadChildren: () => import('@app/main.module/users.module/user-details.module/user-details.module').then(m => m.UserDetailsModule),
    data: {
      breadcrumb: 'User Details'
    }
  },
  {
    path: 'add',
    loadChildren: () => import('@app/main.module/users.module/user-add.module/user-add.module').then(m => m.UserAddModule),
    data: {
      breadcrumb: 'User Add'
    }
  },
  {
    path: 'edit/:id',
    loadChildren: () => import('@app/main.module/users.module/user-edit.module/user-edit.module').then(m => m.UserEditModule),
    data: {
      breadcrumb: 'User Edit'
    }
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(usersRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class UsersRoutingModule { }
