import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcTable } from './ac-table';

describe('AcTable', () => {
  let component: AcTable<any>;
  let fixture: ComponentFixture<AcTable<any>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcTable],
    }).compileComponents();

    fixture = TestBed.createComponent(AcTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
