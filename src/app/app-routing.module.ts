import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'products', loadChildren: () => import('./feature/products/products.module').then(m => m.ProductsModule)},
  {path: 'customers', loadChildren: () => import('./feature/customers/customers.module').then(m => m.CustomersModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
