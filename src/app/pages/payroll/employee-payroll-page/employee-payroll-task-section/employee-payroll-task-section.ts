import { Component, inject, OnDestroy, signal } from '@angular/core';
import { Subscription } from 'rxjs';
import {
  EmployeePayrollTaskRows,
  PayrollTaskType as PayrollTaskType,
  PAYROLL_TYPE_LABEL,
} from '../../../../data-access/employe-payroll-models';
import { EmployeePayrollApiService } from '../../../../data-access/employee-payroll-api-service';
import { AcTable } from '../../../../shared/table/ac-table/ac-table';
import { AcSortableColumn } from '../../../../shared/table/table-directives/ac-sortable-column';
import { EnumDescriptionPipe } from '../../../../shared/pipes/enum-description-pipe';
import { CurrencyFormatPipe } from '../../../../shared/pipes/currency-format-pipe';
import { AcButton } from '../../../../shared/components/ac-button/ac-button';

@Component({
  selector: 'employee-payroll-task-section',
  imports: [AcTable, AcSortableColumn, CurrencyFormatPipe, EnumDescriptionPipe, AcButton],
  templateUrl: './employee-payroll-task-section.html',
  styleUrl: './employee-payroll-task-section.scss',
})
export class EmployeePayrollTaskSection implements OnDestroy {
  private readonly payrollApi = inject(EmployeePayrollApiService);

  // TODO: Get employee ID from route params or input instead of hardcoding
  private readonly employeeId = '00123';

  readonly payrollRows = signal<EmployeePayrollTaskRows[]>([]);

  protected readonly PayrollType = PayrollTaskType;
  protected readonly PAYROLL_TYPE_DESCRIPTIONS = PAYROLL_TYPE_LABEL;

  // TODO: Consider using new signal functionality to replace this
  private subscription?: Subscription;

  constructor() {
    this.loadPayrollLines();
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  private loadPayrollLines(): void {
    this.subscription = this.payrollApi.getEmployeePayrollTaskItems(this.employeeId).subscribe({
      next: (lines) => this.payrollRows.set(lines),
      error: (error) => {
        // TODO: Add proper error handling - show user-friendly error message
        console.error('Failed to load payroll lines:', error);
      },
    });
  }

  // TODO: Add method for retry logic if API call fails
  // TODO: Add loading state signal for better UX
}
