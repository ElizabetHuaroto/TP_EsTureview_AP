import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualificationSchoolComponent } from './qualification-school.component';

describe('QualificationSchoolComponent', () => {
  let component: QualificationSchoolComponent;
  let fixture: ComponentFixture<QualificationSchoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QualificationSchoolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QualificationSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
