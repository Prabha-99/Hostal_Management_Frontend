import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSideComponent } from './student-side.component';

describe('StudentSideComponent', () => {
  let component: StudentSideComponent;
  let fixture: ComponentFixture<StudentSideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentSideComponent]
    });
    fixture = TestBed.createComponent(StudentSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
