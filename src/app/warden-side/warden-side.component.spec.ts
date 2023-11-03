import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WardenSideComponent } from './warden-side.component';

describe('WardenSideComponent', () => {
  let component: WardenSideComponent;
  let fixture: ComponentFixture<WardenSideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WardenSideComponent]
    });
    fixture = TestBed.createComponent(WardenSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
