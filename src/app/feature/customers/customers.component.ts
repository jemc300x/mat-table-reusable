import { Component, OnInit } from '@angular/core';
import { TableColumn } from 'src/app/core/models/table-column.model';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent implements OnInit {
  public data = [
    {
      id: 1,
      customerName: 'Enrique Junior',
      customerLastname: 'Moreno Cardenas',
      menuActions: [{ action: 1, label: 'Edit' }],
    },
    {
      id: 2,
      customerName: 'Indira Del Valle',
      customerLastname: 'Figueroa de Moreno',
      menuActions: [{ action: 1, label: 'Edit' }],
    },
    {
      id: 3,
      customerName: 'Ruben',
      customerLastname: 'Figueroa',
      menuActions: [{ action: 1, label: 'Edit' }],
    },
    {
      id: 4,
      customerName: 'Gloria Ínez',
      customerLastname: 'Figueroa Perez',
      menuActions: [{ action: 1, label: 'Edit' }],
    },
    {
      id: 5,
      customerName: 'Vicmalia Franchezca',
      customerLastname: 'Figueroa de Bolivar',
      menuActions: [{ action: 1, label: 'Edit' }],
    },
    {
      id: 6,
      customerName: 'Daniel Amado',
      customerLastname: 'Bolivar',
      menuActions: [{ action: 1, label: 'Edit' }],
    },
  ];

  public tableColumns: TableColumn[] = [
    { name: 'Id', dataKey: 'id', alignContent: 'start', isSortable: true },
    {
      name: 'Name',
      dataKey: 'customerName',
      alignContent: 'start',
      isSortable: true,
    },
    {
      name: 'Lastname',
      dataKey: 'customerLastname',
      alignContent: 'start',
      isSortable: true,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
