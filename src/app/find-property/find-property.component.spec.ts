import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindPropertyComponent } from './find-property.component';

describe('FindPropertyComponent', () => {
  let component: FindPropertyComponent;
  let fixture: ComponentFixture<FindPropertyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FindPropertyComponent]
    });
    fixture = TestBed.createComponent(FindPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
