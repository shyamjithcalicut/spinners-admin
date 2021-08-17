import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminCategoryComponent } from './admin-category/admin-category.component';
import { AdminStoreComponent } from './admin-store/admin-store.component';
import { AdminCustomerComponent } from './admin-customer/admin-customer.component';
import { AdminItemComponent } from './admin-item/admin-item.component';
import { AdminAreaComponent } from './admin-area/admin-area.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path: 'Categories',
      component: AdminCategoryComponent,
    },
    {
      path: 'Stores',
      component: AdminStoreComponent,
    },
    {
      path: 'Customers',
      component: AdminCustomerComponent,
    },
    {
      path: 'Items',
      component: AdminItemComponent,
    },
    {
      path: 'Areas',
      component: AdminAreaComponent,
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
