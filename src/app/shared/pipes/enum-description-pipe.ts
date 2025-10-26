import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enumDescription',
})
export class EnumDescriptionPipe implements PipeTransform {
  transform<E extends Record<string, string | number>>(
    value: E[keyof E] | null | undefined,
    enumObj: E,
    descriptions: Record<E[keyof E] & (string | number), string>,
    fallback: string = ''
  ): string {
    if (value == null) return fallback;

    const vNum = typeof value === 'string' ? Number(value) : value;
    const byValue =
      (descriptions as Record<string | number, string>)[vNum as any] ??
      (descriptions as Record<string | number, string>)[String(value)];
    if (byValue != null) return byValue;

    let key: string | undefined;
    if (typeof vNum === 'number' && (enumObj as any)[vNum] != null) {
      key = String((enumObj as any)[vNum]);
    } else {
      key = Object.keys(enumObj).find((k) => (enumObj as any)[k] === value);
    }
    return key ?? fallback;
  }
}
