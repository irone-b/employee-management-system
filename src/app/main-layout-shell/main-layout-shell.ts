import { Component } from '@angular/core';
import { EmployeePayrollPage } from '../pages/payroll/employee-payroll-page/employee-payroll-page';
import { AcNavItem } from '../shared/components/ac-nav-item/ac-nav-item';

@Component({
  selector: 'main-layout-shell',
  imports: [EmployeePayrollPage, AcNavItem],
  templateUrl: './main-layout-shell.html',
  styleUrl: './main-layout-shell.scss',
})
export class MainLayoutShell {}
