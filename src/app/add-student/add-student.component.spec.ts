import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddStudentComponent } from './add-student.component';
import { of, throwError } from 'rxjs';
import { SharedService } from 'src/services/shared.service';
import { ReactiveFormsModule } from '@angular/forms';

describe('AddStudentComponent', () => {
  let component: AddStudentComponent;
  let fixture: ComponentFixture<AddStudentComponent>;
  let sharedService: jasmine.SpyObj<SharedService >;

  beforeEach(async () => {
    sharedService = jasmine.createSpyObj('SharedService', ['addStudent']);

    await TestBed.configureTestingModule({
      declarations: [ AddStudentComponent ],
      imports: [ ReactiveFormsModule ],
      providers: [
        { provide: SharedService, useValue: sharedService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AddStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should set successMsg when addStudent succeeds', () => {
  //   const mockStudentData = { name: 'John Doe', age: 20, email: 'john@example.com' };
  //   component.studentForm.setValue(mockStudentData);
  //   sharedService.addStudent.and.returnValue(of({}));

  //   component.addStudent();

  //   expect(component.successMsg).toBe('Student successfully added');
  //   expect(component.errorMsg).toBeUndefined();
  //   expect(component.submitted).toBeTrue();
  // });

  // it('should set errorMsg when addStudent fails', () => {
  //   const mockStudentData = { name: 'John Doe', age: 20, email: 'john@example.com' };
  //   component.studentForm.setValue(mockStudentData);
  //   sharedService.addStudent.and.returnValue(throwError({ message: 'Failed to add student' }));

  //   component.addStudent();

  //   expect(component.successMsg).toBeUndefined();
  //   expect(component.errorMsg).toBe('Failed to add student');
  //   expect(component.submitted).toBeTrue();
  // });
});
