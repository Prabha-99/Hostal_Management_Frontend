import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplainFilterComponent } from './complain-filter.component';

describe('ComplainFilterComponent', () => {
  let component: ComplainFilterComponent;
  let fixture: ComponentFixture<ComplainFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComplainFilterComponent]
    });
    fixture = TestBed.createComponent(ComplainFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
