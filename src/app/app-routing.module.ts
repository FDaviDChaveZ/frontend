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
        redirectTo: '/dashboard/default',
        pathMatch: 'full'
      },
      {
        path: 'dashboard/default',
        loadComponent: () => import('./demo/default/dashboard/dashboard.component').then((c) => c.DefaultComponent)
      },
      {
        path: 'employees',
        loadChildren: () => import("./modules/employees/employees.module").then(m => m.EmployeesModule)
      },
      {
        path: 'products',
        loadChildren: () => import("./modules/products/products.module").then(m => m.ProductsModule)
      },
      {
        path: 'color',
        loadComponent: () => import('./demo/ui-component/ui-color/ui-color.component')
      },
      {
        path: 'sample-page',
        loadComponent: () => import('./demo/other/sample-page/sample-page.component')
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
