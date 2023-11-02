import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSideBarComponent } from './student-side-bar.component';

describe('StudentSideBarComponent', () => {
  let component: StudentSideBarComponent;
  let fixture: ComponentFixture<StudentSideBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentSideBarComponent]
    });
    fixture = TestBed.createComponent(StudentSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
