import { Directive, HostBinding, Input, output } from '@angular/core';

@Directive({
  selector: '[acSortableColumn]',
  standalone: true,
  host: {
    class: 'ac-sortable',
    '(click)': 'handleClick()',
    '[class.ac-sort-asc]': 'isAscending',
    '[class.ac-sort-desc]': 'isDescending',
    '[class.ac-sort-none]': 'isUnsorted',
  },
})
export class AcSortableColumn {
  @Input('acSortableColumn') field!: string;

  readonly sortClick = output<string>();

  isAscending = false;
  isDescending = false;
  isUnsorted = true;
  ariaSort: 'ascending' | 'descending' | 'none' = 'none';

  // Comment for clarity: Icon name exposed as data attribute for CSS ::after pseudo-element
  // CSS reads this via: content: attr(data-sort-glyph);
  @HostBinding('attr.data-sort-glyph') iconGlyph: string = 'unfold_more';

  handleClick(): void {
    this.sortClick.emit(this.field);
  }

  updateSortState(order: 1 | -1 | 0, isActive: boolean): void {
    this.isAscending = isActive && order === 1;
    this.isDescending = isActive && order === -1;
    this.isUnsorted = !isActive || order === 0;

    this.ariaSort = this.isAscending ? 'ascending' : this.isDescending ? 'descending' : 'none';

    this.iconGlyph = this.isAscending
      ? 'arrow_upward'
      : this.isDescending
      ? 'arrow_downward'
      : 'unfold_more';
  }
}
