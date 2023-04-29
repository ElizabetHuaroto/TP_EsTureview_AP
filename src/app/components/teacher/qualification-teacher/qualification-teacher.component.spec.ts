import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualificationTeacherComponent } from './qualification-teacher.component';

describe('QualificationTeacherComponent', () => {
  let component: QualificationTeacherComponent;
  let fixture: ComponentFixture<QualificationTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QualificationTeacherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QualificationTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
