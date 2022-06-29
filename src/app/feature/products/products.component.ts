import { Component, OnInit } from '@angular/core';
import { TableColumn } from 'src/app/core/models/table-column.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  public data = [
    {
      id: 1,
      productName: 'Producto 1',
      productPrice: 100,
      menuActions: [{ action: 1, label: 'Edit' }],
    },
    {
      id: 2,
      productName: 'Producto 2',
      productPrice: 200,
      menuActions: [{ action: 1, label: 'Edit' }],
    },
    {
      id: 3,
      productName: 'Producto 3',
      productPrice: 300,
      menuActions: [{ action: 1, label: 'Edit' }],
    },
    {
      id: 4,
      productName: 'Producto 4',
      productPrice: 400,
      menuActions: [{ action: 1, label: 'Edit' }],
    },
  ];

  public tableColumns: TableColumn[] = [
    { name: 'Id', dataKey: 'id', alignContent: 'start', isSortable: false },
    {
      name: 'Product Name',
      dataKey: 'productName',
      alignContent: 'center',
      isSortable: false,
    },
    {
      name: 'Product Price',
      dataKey: 'productPrice',
      alignContent: 'end',
      isSortable: true,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
