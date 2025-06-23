import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardsCardComponent } from './dashboards-card.component';

describe('DashboardsCardComponent', () => {
  let component: DashboardsCardComponent;
  let fixture: ComponentFixture<DashboardsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardsCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
