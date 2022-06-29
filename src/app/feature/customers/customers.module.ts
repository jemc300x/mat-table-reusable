import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { TableModule } from 'src/app/shared/components/table/table.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/utils/material.module';

@NgModule({
  declarations: [CustomersComponent],
  imports: [CustomersRoutingModule, MaterialModule, TableModule],
})
export class CustomersModule {}
