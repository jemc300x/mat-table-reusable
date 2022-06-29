import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getterData',
})
export class GetterDataPipe implements PipeTransform {
  transform(value: any, dataKey: string): unknown {
    return value[dataKey];
  }
}
