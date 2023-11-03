import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WardenDashComponent } from './warden-dash.component';

describe('WardenDashComponent', () => {
  let component: WardenDashComponent;
  let fixture: ComponentFixture<WardenDashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WardenDashComponent]
    });
    fixture = TestBed.createComponent(WardenDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
