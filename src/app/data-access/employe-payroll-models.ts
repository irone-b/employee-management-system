//Payroll task types and models
export interface EmployeePayrollTaskRows {
  id: number;
  name: string;
  description: string | null;
  type: PayrollTaskType;
  quantity: number;
  rateAmount: number | null;
  hasWarning: boolean;
}

export enum PayrollTaskType {
  Group1 = 1,
  Group2 = 2,
  Group3 = 3,
}

export const PAYROLL_TYPE_LABEL: Record<PayrollTaskType, string> = {
  [PayrollTaskType.Group1]: 'Group 1',
  [PayrollTaskType.Group2]: 'Group 2',
  [PayrollTaskType.Group3]: 'Group 3',
};

//Payroll employee details types and models
export interface EmployeeDetails {
  id: string;
  number: string;
  name: string;
  team: string;
}
export interface Totals {
  earnings: number;
  deductions: number;
  net: number;
}
export interface Contribution {
  code: 'UIF' | 'PAYE' | 'TOTAL';
  amount: number;
}

export interface EmployeeSummaryDto {
  employee: EmployeeDetails;
  totals: Totals;
  contributions: Contribution[];
}
