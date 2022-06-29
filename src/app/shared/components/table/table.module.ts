import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { MaterialModule } from 'src/utils/material.module';
import { GetterDataPipe } from './pipes/getter-data.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [TableComponent, GetterDataPipe],
  imports: [CommonModule, MaterialModule],
  exports: [TableComponent],
})
export class TableModule {}
