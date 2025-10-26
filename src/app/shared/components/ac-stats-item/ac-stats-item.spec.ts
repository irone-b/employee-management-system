import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcStatsItem } from './ac-stats-item';

describe('AcStatsItem', () => {
  let component: AcStatsItem;
  let fixture: ComponentFixture<AcStatsItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcStatsItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcStatsItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
