import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLayoutShell } from './main-layout-shell';

describe('MainLayoutShell', () => {
  let component: MainLayoutShell;
  let fixture: ComponentFixture<MainLayoutShell>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainLayoutShell]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainLayoutShell);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
