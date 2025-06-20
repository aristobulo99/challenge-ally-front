import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastsCardComponent } from './toasts-card.component';

describe('ToastsCardComponent', () => {
  let component: ToastsCardComponent;
  let fixture: ComponentFixture<ToastsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToastsCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToastsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
