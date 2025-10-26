import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeePayrollTaskSection } from './employee-payroll-task-section';

describe('EmployeePayrollTaskSection', () => {
  let component: EmployeePayrollTaskSection;
  let fixture: ComponentFixture<EmployeePayrollTaskSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeePayrollTaskSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeePayrollTaskSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
