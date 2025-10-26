import { Component } from '@angular/core';
import { EmployeePayrollPage } from '../pages/payroll/employee-payroll-page/employee-payroll-page';

@Component({
  selector: 'main-layout-shell',
  imports: [EmployeePayrollPage],
  templateUrl: './main-layout-shell.html',
  styleUrl: './main-layout-shell.scss',
})
export class MainLayoutShell {}
