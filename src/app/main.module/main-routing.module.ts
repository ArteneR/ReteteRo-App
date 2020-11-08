import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent }        from './main.component/main.component';


const mainRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'login',
        loadChildren: () => import('./login.module/login.module').then(m => m.LoginModule)
      },
      {
        path: 'recipes',
        loadChildren: () => import('./recipes.module/recipes.module').then(m => m.RecipesModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('./contact.module/contact.module').then(m => m.ContactModule)
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
