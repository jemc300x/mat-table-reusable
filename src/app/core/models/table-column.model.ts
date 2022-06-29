export interface TableColumn {
  name: string;
  dataKey: string;
  alignContent: 'start' | 'center' | 'end';
  isSortable: boolean;
  format?: string;
}
