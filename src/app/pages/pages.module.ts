import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AdminCategoryComponent } from './admin-category/admin-category.component';
import { AdminStoreComponent } from './admin-store/admin-store.component';
import { AdminItemComponent } from './admin-item/admin-item.component';
import { AdminAreaComponent } from './admin-area/admin-area.component';
import { AdminCustomerComponent } from './admin-customer/admin-customer.component';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    PagesComponent,
    AdminStoreComponent,
    AdminItemComponent,
    AdminAreaComponent,
    AdminCategoryComponent,
    AdminCustomerComponent
  ]
})
export class PagesModule {
}