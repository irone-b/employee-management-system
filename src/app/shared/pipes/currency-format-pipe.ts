import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyFormat',
})
export class CurrencyFormatPipe implements PipeTransform {
  transform(value: number | null | undefined, currency = 'ZAR', empty = '—'): string {
    if (value == null) return empty;
    return new Intl.NumberFormat('en-ZA', { style: 'currency', currency }).format(value);
  }
}
