import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeePayrollPage } from './employee-payroll-page';

describe('EmployeePayrollPage', () => {
  let component: EmployeePayrollPage;
  let fixture: ComponentFixture<EmployeePayrollPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeePayrollPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeePayrollPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
