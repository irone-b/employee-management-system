import {
  AfterContentInit,
  Component,
  computed,
  ContentChild,
  ContentChildren,
  input,
  QueryList,
  signal,
  TemplateRef,
  ViewEncapsulation,
} from '@angular/core';
import { AcSortableColumn } from '../table-directives/ac-sortable-column';
import { NgTemplateOutlet } from '@angular/common';

export type AcSortOrder = 1 | -1 | 0;

@Component({
  selector: 'ac-table',
  imports: [NgTemplateOutlet],
  templateUrl: './ac-table.html',
  styleUrl: './ac-table.scss',
  encapsulation: ViewEncapsulation.None,
})
export class AcTable<T> implements AfterContentInit {
  readonly rows = input<T[]>([]);
  readonly filterable = input<boolean>(true);
  readonly globalFilterFields = input<(keyof T)[]>([]);
  readonly globalFilterPlaceholder = input<string>('Search');

  @ContentChild('acHeader', { read: TemplateRef }) headerTemplate?: TemplateRef<any>;
  @ContentChild('acBody', { read: TemplateRef }) bodyTemplate?: TemplateRef<any>;
  @ContentChild('acToolbarActions', { read: TemplateRef })
  toolbarActionsTemplate?: TemplateRef<any>;

  @ContentChildren(AcSortableColumn, { descendants: true })
  private sortableColumns!: QueryList<AcSortableColumn>;

  readonly searchQuery = signal<string>('');
  readonly sortField = signal<string | null>(null);
  readonly sortOrder = signal<AcSortOrder>(0);

  private readonly effectiveFilterFields = computed<(keyof T)[]>(() => {
    const configured = this.globalFilterFields();
    if (configured?.length) return configured;

    const firstRow = this.rows()?.[0];
    return firstRow ? (Object.keys(firstRow) as (keyof T)[]) : [];
  });

  readonly filteredAndSortedRows = computed<T[]>(() => {
    let data = [...(this.rows() ?? [])];

    // TODO: For large datasets (1000+ rows), consider virtual scrolling or pagination
    // Current implementation filters/sorts entire dataset on every change which is not great
    if (this.filterable() && this.searchQuery() && this.effectiveFilterFields().length) {
      const query = this.searchQuery().toLowerCase();
      const fields = this.effectiveFilterFields();

      data = data.filter((row) =>
        fields.some((field) =>
          String(row[field] ?? '')
            .toLowerCase()
            .includes(query)
        )
      );
    }

    const field = this.sortField();
    const order = this.sortOrder();

    if (field && order !== 0) {
      // TODO: Create sorting override functionality - allow custom comparator functions per field
      data.sort((a, b) => this.compareValues(a[field as keyof T], b[field as keyof T]) * order);
    }

    return data;
  });

  ngAfterContentInit() {
    const wireColumn = (col: AcSortableColumn) => {
      col.sortClick.subscribe((field) => this.handleSort(field));
    };

    this.sortableColumns?.forEach(wireColumn);

    this.sortableColumns?.changes.subscribe((queryList: QueryList<AcSortableColumn>) => {
      queryList.forEach(wireColumn);
      this.updateColumnVisualState();
    });

    this.updateColumnVisualState();
  }

  private handleSort(field: string): void {
    if (this.sortField() !== field) {
      this.sortField.set(field);
      this.sortOrder.set(1);
    } else {
      const current = this.sortOrder();
      const next = current === 1 ? -1 : current === -1 ? 0 : 1;
      this.sortOrder.set(next);

      if (next === 0) {
        this.sortField.set(null);
      }
    }

    this.updateColumnVisualState();
  }

  private updateColumnVisualState(): void {
    if (!this.sortableColumns) return;

    const field = this.sortField();
    const order = this.sortOrder();

    this.sortableColumns.forEach((col) => {
      const isActiveColumn = field === col.field && order !== 0;
      col.updateSortState(order, isActiveColumn);
    });
  }

  private compareValues(a: unknown, b: unknown): number {
    if (a == null && b == null) return 0;
    if (a == null) return -1;
    if (b == null) return 1;

    if (a instanceof Date || b instanceof Date) {
      const timeA = a instanceof Date ? a.getTime() : Date.parse(String(a));
      const timeB = b instanceof Date ? b.getTime() : Date.parse(String(b));

      if (timeA === timeB) return 0;
      return timeA < timeB ? -1 : 1;
    }

    const numA = typeof a === 'number' ? a : Number(a);
    const numB = typeof b === 'number' ? b : Number(b);

    if (!Number.isNaN(numA) && !Number.isNaN(numB)) {
      if (numA === numB) return 0;
      return numA < numB ? -1 : 1;
    }

    return String(a).localeCompare(String(b), undefined, {
      sensitivity: 'base',
      numeric: true,
    });
  }
}
