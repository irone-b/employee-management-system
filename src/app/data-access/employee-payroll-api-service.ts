import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { EmployeePayrollTaskRows, EmployeeSummaryDto } from './employe-payroll-models';

@Injectable({
  providedIn: 'root',
})
export class EmployeePayrollApiService {
  private http = inject(HttpClient);
  private assetsBase = 'assets/data-store';

  getEmployeePayrollTaskItems(employeeId: string): Observable<EmployeePayrollTaskRows[]> {
    const url = `${this.assetsBase}/employee-${employeeId}-tasks.json`;
    return this.http.get<EmployeePayrollTaskRows[]>(url).pipe(map((rows) => rows ?? []));
  }

  getEmployeeSummary(employeeId: string) {
    return this.http.get<EmployeeSummaryDto>(
      `${this.assetsBase}/employee-${employeeId}-summary.json`
    );
  }
}
