import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeePayrollSummarySection } from './employee-payroll-summary-section';

describe('EmployeePayrollSummarySection', () => {
  let component: EmployeePayrollSummarySection;
  let fixture: ComponentFixture<EmployeePayrollSummarySection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeePayrollSummarySection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeePayrollSummarySection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
