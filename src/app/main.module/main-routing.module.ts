import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent }        from '@app/main.module/main.component/main.component';
import { AuthGuard }            from '@app/_auth/auth.guard';


const mainRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'login',
        loadChildren: () => import('@app/main.module/login.module/login.module').then(m => m.LoginModule)
      },
      {
        path: '',
        children: [
          {
            path: 'recipes',
            canActivate: [AuthGuard],
            loadChildren: () => import('@app/main.module/recipes.module/recipes.module').then(m => m.RecipesModule)
          },
          {
            path: 'contact',
            loadChildren: () => import('@app/main.module/contact.module/contact.module').then(m => m.ContactModule)
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
    RouterModule.forChild(mainRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MainRoutingModule { }
