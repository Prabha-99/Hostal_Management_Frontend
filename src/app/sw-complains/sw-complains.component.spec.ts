import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwComplainsComponent } from './sw-complains.component';

describe('SwComplainsComponent', () => {
  let component: SwComplainsComponent;
  let fixture: ComponentFixture<SwComplainsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SwComplainsComponent]
    });
    fixture = TestBed.createComponent(SwComplainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
