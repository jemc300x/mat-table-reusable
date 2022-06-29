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
      birthOfDate: new Date(1986, 11, 8),
      menuActions: [{ action: 1, label: 'Edit' }],
      expandDetail: [],
    },
    {
      id: 2,
      customerName: 'Indira Del Valle',
      customerLastname: 'Figueroa de Moreno',
      birthOfDate: new Date(1991, 4, 17),
      menuActions: [{ action: 1, label: 'Edit' }],
      expandDetail: [
        {
          id: 1,
          customerName: 'Enrique Junior',
          customerLastname: 'Moreno Cardenas',
          birthOfDate: new Date(1986, 11, 8),
          menuActions: [{ action: 1, label: 'Edit' }],
        },
        {
          id: 2,
          customerName: 'Indira Del Valle',
          customerLastname: 'Figueroa de Moreno',
          birthOfDate: new Date(1991, 4, 17),
          menuActions: [{ action: 1, label: 'Edit' }],
        },
        {
          id: 3,
          customerName: 'Ruben',
          customerLastname: 'Figueroa',
          birthOfDate: new Date(1956, 11, 8),
          menuActions: [{ action: 1, label: 'Edit' }],
        },
        {
          id: 4,
          customerName: 'Gloria Ínez',
          customerLastname: 'Figueroa Perez',
          birthOfDate: new Date(1966, 11, 8),
          menuActions: [{ action: 1, label: 'Edit' }],
        },
        {
          id: 5,
          customerName: 'Vicmalia Franchezca',
          customerLastname: 'Figueroa de Bolivar',
          birthOfDate: new Date(1996, 11, 8),
          menuActions: [{ action: 1, label: 'Edit' }],
        },
        {
          id: 6,
          customerName: 'Daniel Amado',
          customerLastname: 'Bolivar',
          birthOfDate: new Date(1980, 11, 8),
          menuActions: [{ action: 1, label: 'Edit' }],
        },
      ],
    },
    {
      id: 3,
      customerName: 'Ruben',
      customerLastname: 'Figueroa',
      birthOfDate: new Date(1956, 11, 8),
      menuActions: [{ action: 1, label: 'Edit' }],
      expandDetail: [],
    },
    {
      id: 4,
      customerName: 'Gloria Ínez',
      customerLastname: 'Figueroa Perez',
      birthOfDate: new Date(1966, 11, 8),
      menuActions: [{ action: 1, label: 'Edit' }],
      expandDetail: [],
    },
    {
      id: 5,
      customerName: 'Vicmalia Franchezca',
      customerLastname: 'Figueroa de Bolivar',
      birthOfDate: new Date(1996, 11, 8),
      menuActions: [{ action: 1, label: 'Edit' }],
      expandDetail: [],
    },
    {
      id: 6,
      customerName: 'Daniel Amado',
      customerLastname: 'Bolivar',
      birthOfDate: new Date(1980, 11, 8),
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
    {
      name: 'BOD',
      dataKey: 'birthOfDate',
      alignContent: 'start',
      isSortable: true,
      format: 'MMM dd yyyy',
    },
  ];

  public tableChildColumns: TableColumn[] = [
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
    {
      name: 'BOD',
      dataKey: 'birthOfDate',
      alignContent: 'start',
      isSortable: true,
      format: 'MMM dd yyyy',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  onMenuAction(action: any) {
    console.log(action);
  }
}
