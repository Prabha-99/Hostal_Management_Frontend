import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeanSideComponent } from './dean-side.component';

describe('DeanSideComponent', () => {
  let component: DeanSideComponent;
  let fixture: ComponentFixture<DeanSideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeanSideComponent]
    });
    fixture = TestBed.createComponent(DeanSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
