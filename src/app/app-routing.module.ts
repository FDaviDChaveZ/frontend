import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Project import
import { AdminComponent } from './theme/layouts/admin-layout/admin-layout.component';
import { GuestComponent } from './theme/layouts/guest/guest.component';

const routes: Routes = [  
  {
    path: '',
    component: AdminComponent,
    children: [      
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      },
      // {
      //   path: 'dashboard/default',
      //   loadComponent: () => import('./demo/default/dashboard/dashboard.component').then((c) => c.DefaultComponent)
      // },
      {
        path: 'sales',
        loadChildren: () => import('./modules/sales/sales.module').then((m) => m.SalesModule)
      },
      {
        path: 'sales-list',
        loadChildren: () => import("./modules/sales-list/sales-list.module").then(m => m.SalesListModule)
      },
      {
        path: 'employees',
        loadChildren: () => import("./modules/employees/employees.module").then(m => m.EmployeesModule)
      },
      {
        path: 'employees-list',
        loadChildren: () => import("./modules/employees-list/employees-list.module").then(m => m.EmployeesListModule)
      },
      {
        path: 'products',
        loadChildren: () => import("./modules/products/products.module").then(m => m.ProductsModule)
      },
      {
        path: 'products-list',
        loadChildren: () => import("./modules/products-list/products-list.module").then(m => m.ProductsListModule)
      },
      {
        path: 'clients',
        loadChildren: () => import("./modules/clients/clients.module").then(m => m.ClientsModule)
      },
      {
        path: 'clients-list',
        loadChildren: () => import("./modules/clients-list/clients-list.module").then(m => m.ClientsListModule)
      },
      // {
      //   path: 'sample-page',
      //   loadComponent: () => import('./demo/other/sample-page/sample-page.component')
      // }
    ]
  },
  {
    path: '',
    component: GuestComponent,
    children: [
      {
        path: 'login',
        loadChildren: () => import('./demo/authentication/login/login.module').then(m => m.LoginModule)
       }
      // {
      //   path: 'register',
      //   loadChildren: () => import('./demo/authentication/register/register.module').then(m => m.ClientsListModule)
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
