import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubWardenDashComponent } from './sub-warden-dash.component';

describe('SubWardenDashComponent', () => {
  let component: SubWardenDashComponent;
  let fixture: ComponentFixture<SubWardenDashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubWardenDashComponent]
    });
    fixture = TestBed.createComponent(SubWardenDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
