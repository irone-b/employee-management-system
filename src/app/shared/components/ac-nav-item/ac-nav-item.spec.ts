import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcNavItem } from './ac-nav-item';

describe('AcNavItem', () => {
  let component: AcNavItem;
  let fixture: ComponentFixture<AcNavItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcNavItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcNavItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
