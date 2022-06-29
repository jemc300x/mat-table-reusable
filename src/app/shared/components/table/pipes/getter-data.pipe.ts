import { DatePipe, DecimalPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { TableColumn } from 'src/app/core/models/table-column.model';

@Pipe({
  name: 'getterData',
})
export class GetterDataPipe implements PipeTransform {
  transform(value: any, column: TableColumn): unknown {
    let displayValue = value[column.dataKey];

    if (column.format === undefined) {
      return displayValue;
    }

    const typeOfDisplayValue = typeof displayValue;
    switch (typeOfDisplayValue) {
      case 'number':
        const formatNumber = new DecimalPipe('en-US');
        displayValue = formatNumber.transform(displayValue, column.format);
        break;

      case 'string':
        break;

      case 'object':
        const isDate = this.isDate(displayValue);
        if (isDate) {
          displayValue = new DatePipe('en-US').transform(
            displayValue,
            column.format
          );
        }
        break;

      default:
        console.log('No valid');
        break;
    }

    return displayValue;
  }

  isDate(value: any) {
    return (
      value &&
      Object.prototype.toString.call(value) === '[object Date]' &&
      !isNaN(value)
    );
  }
}
