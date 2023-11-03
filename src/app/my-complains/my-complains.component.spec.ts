import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComplainsComponent } from './my-complains.component';

describe('MyComplainsComponent', () => {
  let component: MyComplainsComponent;
  let fixture: ComponentFixture<MyComplainsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyComplainsComponent]
    });
    fixture = TestBed.createComponent(MyComplainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
