import { Component } from '@angular/core';
import { EmployeePayrollSummarySection } from './employee-payroll-summary-section/employee-payroll-summary-section';
import { EmployeePayrollTaskSection } from './employee-payroll-task-section/employee-payroll-task-section';

@Component({
  selector: 'employee-payroll-page',
  imports: [EmployeePayrollSummarySection, EmployeePayrollTaskSection],
  templateUrl: './employee-payroll-page.html',
  styleUrl: './employee-payroll-page.scss',
})
export class EmployeePayrollPage {}
