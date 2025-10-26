import { Component } from '@angular/core';
import { EmployeePayrollSummarySection } from './employee-payroll-summary-section/employee-payroll-summary-section';
import { EmployeePayrollTaskSection } from './employee-payroll-task-section/employee-payroll-task-section';
import { AcNavItem } from '../../../shared/components/ac-nav-item/ac-nav-item';

@Component({
  selector: 'employee-payroll-page',
  imports: [EmployeePayrollSummarySection, EmployeePayrollTaskSection, AcNavItem],
  templateUrl: './employee-payroll-page.html',
  styleUrl: './employee-payroll-page.scss',
})
export class EmployeePayrollPage {}
