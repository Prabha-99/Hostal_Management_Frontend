import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwComplainsComponent } from './aw-complains.component';

describe('AwComplainsComponent', () => {
  let component: AwComplainsComponent;
  let fixture: ComponentFixture<AwComplainsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AwComplainsComponent]
    });
    fixture = TestBed.createComponent(AwComplainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
