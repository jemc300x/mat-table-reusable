import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { TableModule } from 'src/app/shared/components/table/table.module';
import { MaterialModule } from 'src/utils/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [ProductsComponent],
  imports: [ProductsRoutingModule, MaterialModule, TableModule],
})
export class ProductsModule {}
