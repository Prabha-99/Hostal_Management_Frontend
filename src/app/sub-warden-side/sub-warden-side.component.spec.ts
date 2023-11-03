import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubWardenSideComponent } from './sub-warden-side.component';

describe('SubWardenSideComponent', () => {
  let component: SubWardenSideComponent;
  let fixture: ComponentFixture<SubWardenSideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubWardenSideComponent]
    });
    fixture = TestBed.createComponent(SubWardenSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
