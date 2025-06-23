import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableCountriesComponent } from './available-countries.component';

describe('AvailableCountriesComponent', () => {
  let component: AvailableCountriesComponent;
  let fixture: ComponentFixture<AvailableCountriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvailableCountriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvailableCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
