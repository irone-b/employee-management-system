import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcButton } from './ac-button';

describe('AcButton', () => {
  let component: AcButton;
  let fixture: ComponentFixture<AcButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
