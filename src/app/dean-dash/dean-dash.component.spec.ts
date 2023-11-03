import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeanDashComponent } from './dean-dash.component';

describe('DeanDashComponent', () => {
  let component: DeanDashComponent;
  let fixture: ComponentFixture<DeanDashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeanDashComponent]
    });
    fixture = TestBed.createComponent(DeanDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
