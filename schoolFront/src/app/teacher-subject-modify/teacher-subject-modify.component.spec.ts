import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherSubjectModifyComponent } from './teacher-subject-modify.component';

describe('TeacherSubjectModifyComponent', () => {
  let component: TeacherSubjectModifyComponent;
  let fixture: ComponentFixture<TeacherSubjectModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherSubjectModifyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherSubjectModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
