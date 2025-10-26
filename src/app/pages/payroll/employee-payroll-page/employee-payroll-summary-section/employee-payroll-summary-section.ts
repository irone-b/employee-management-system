import { Component, inject, Input, signal, SimpleChanges } from '@angular/core';
import { EmployeeSummaryDto } from '../../../../data-access/employe-payroll-models';
import { AcStatsItem, StatItemVM } from '../../../../shared/components/ac-stats-item/ac-stats-item';
import { EmployeePayrollApiService } from '../../../../data-access/employee-payroll-api-service';
import { AcButton } from '../../../../shared/components/ac-button/ac-button';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'employee-payroll-summary-section',
  imports: [AcStatsItem, AcButton],
  templateUrl: './employee-payroll-summary-section.html',
  styleUrl: './employee-payroll-summary-section.scss',
})
export class EmployeePayrollSummarySection {
  private readonly api = inject(EmployeePayrollApiService);

  summary: EmployeeSummaryDto | null = null;
  overview: StatItemVM[] = [];
  contributions: StatItemVM[] = [];
  loading = false;
  error: string | null = null;

  private employeeSummarySubscription?: Subscription;

  constructor() {
    // Todo Parent should be supplying the selected employee
    this.fetchSummary('00123');
  }

  private fetchSummary(id: string): void {
    this.api.getEmployeeSummary('00123').subscribe((s) => {
      this.summary = s;
      this.overview = [
        {
          label: 'Total Earnings',
          amount: s.totals.earnings,
          icon: 'trending_up',
          tone: 'success',
        },
        {
          label: 'Total Deductions',
          amount: s.totals.deductions,
          icon: 'trending_down',
          tone: 'danger',
        },
        { label: 'Net total', amount: s.totals.net, icon: 'account_balance', tone: 'info' },
      ];

      this.contributions = s.contributions.map((c) => ({
        label: c.code === 'TOTAL' ? 'Total' : c.code,
        amount: c.amount,
        icon: c.code === 'UIF' ? 'description' : c.code === 'PAYE' ? 'payments' : 'point_of_sale',
        tone: 'neutral',
      }));
    });
  }
}
