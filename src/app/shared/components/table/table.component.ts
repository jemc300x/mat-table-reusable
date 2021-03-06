import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TableColumn } from 'src/app/core/models/table-column.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class TableComponent implements OnInit {
  public tableDataSource: MatTableDataSource<any> = new MatTableDataSource<any>(
    []
  );
  public displayedColumns: string[] = [];
  public expandedElement: any | null;

  @ViewChild(MatPaginator) set matPaginator(paginator: MatPaginator) {
    this.tableDataSource.paginator = paginator;
  }
  @ViewChild(MatSort) set matSort(sort: MatSort) {
    this.tableDataSource.sort = sort;
  }

  @Input() isPageable: boolean = false;
  @Input() isSortable: boolean = false;
  @Input() isFilterable: boolean = false;
  @Input() tableColumns: TableColumn[] = [];
  @Input() tableChildColumns: TableColumn[] = [];
  @Input() menuActionsIcon: string = 'more_horiz';
  @Input() showMenuActions: boolean = false;
  @Input() showShadow: boolean = true;
  @Input() isRowExpanded: boolean = false;
  @Input() paginationSizes: number[] = [5, 10, 15];
  @Input() defaultPageSize: number = this.paginationSizes[0];

  @Output() sort: EventEmitter<Sort> = new EventEmitter();
  @Output() menuAction: EventEmitter<any> = new EventEmitter();

  @Input()
  public set dataSource(data: any) {
    this.setDataSource(data);
  }

  constructor() {}

  ngOnInit(): void {
    if (this.showMenuActions) {
      this.displayedColumns = this.tableColumns.map((column) => column.name);
      this.displayedColumns.push('menuActions');
    } else {
      this.displayedColumns = this.tableColumns.map((column) => column.name);
    }

    if (this.isRowExpanded) {
      this.displayedColumns = ['expand', ...this.displayedColumns];
    }
  }

  setDataSource(data: any) {
    this.tableDataSource = new MatTableDataSource(data);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.tableDataSource.filter = filterValue.trim().toLocaleLowerCase();
  }

  sortTable(sortParameter: Sort) {
    sortParameter.active = this.tableColumns.find(
      (column) => column.name === sortParameter.active
    )?.dataKey as string;
    this.sort.emit(sortParameter);
  }

  onMenuSelectAction(row: any) {
    this.menuAction.emit(row);
  }
}
