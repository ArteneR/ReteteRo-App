import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent }        from '@app/main.module/main.component/main.component';
import { AuthGuard }            from '@app/_auth/auth.guard';


const mainRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    data: {
      breadcrumb: null
    },
    children: [
      {
        path: '',
        redirectTo:'/recipes', 
        pathMatch: 'full',
        data: {
          breadcrumb: null
        }
      },
      {
        path: 'login',
        loadChildren: () => import('@app/main.module/login.module/login.module').then(m => m.LoginModule),
        data: {
          breadcrumb: 'Login'
        }
      },
      {
        path: 'register',
        loadChildren: () => import('@app/main.module/register.module/register.module').then(m => m.RegisterModule),
        data: {
          breadcrumb: 'Register'
        }
      },
      {
        path: 'forgot-password',
        loadChildren: () => import('@app/main.module/forgot-password.module/forgot-password.module').then(m => m.ForgotPasswordModule),
        data: {
          breadcrumb: 'Forgot Password'
        }
      },
      {
        path: 'contact',
        loadChildren: () => import('@app/main.module/contact.module/contact.module').then(m => m.ContactModule),
        data: {
          breadcrumb: 'Contact'
        }
      },
      {
        path: 'privacy-policy',
        loadChildren: () => import('@app/main.module/privacy-policy.module/privacy-policy.module').then(m => m.PrivacyPolicyModule),
        data: {
          breadcrumb: 'Privacy Policy'
        }
      },
      {
        path: 'terms-and-conditions',
        loadChildren: () => import('@app/main.module/terms-and-conditions.module/terms-and-conditions.module').then(m => m.TermsAndConditionsModule),
        data: {
          breadcrumb: 'Terms and Conditions'
        }
      },
      {
        path: 'recipes',
        // canActivate: [AuthGuard],
        loadChildren: () => import('@app/main.module/recipes.module/recipes.module').then(m => m.RecipesModule),
        data: {
          breadcrumb: 'Recipes'
        }
      },
      {
        path: 'categories',
        loadChildren: () => import('@app/main.module/categories.module/categories.module').then(m => m.CategoriesModule),
        data: {
          breadcrumb: 'Categories'
        }
      },
      {
        path: 'users',
        loadChildren: () => import('@app/main.module/users.module/users.module').then(m => m.UsersModule),
        data: {
          breadcrumb: 'Users'
        }
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
