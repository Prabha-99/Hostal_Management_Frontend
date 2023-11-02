import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeanComplainsComponent } from './dean-complains.component';

describe('DeanComplainsComponent', () => {
  let component: DeanComplainsComponent;
  let fixture: ComponentFixture<DeanComplainsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeanComplainsComponent]
    });
    fixture = TestBed.createComponent(DeanComplainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
