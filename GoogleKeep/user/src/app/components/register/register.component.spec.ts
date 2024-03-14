import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './register.component';
import { UserService } from 'src/app/services/user-services/user.service';
import { HttpService } from 'src/app/services/http-services/http.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let userService: UserService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports: [ 
        ReactiveFormsModule,
        FormsModule,
        RouterTestingModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        BrowserAnimationsModule,
        HttpClientTestingModule
      ],
      providers: [ UserService, HttpService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    userService = TestBed.get(UserService);
    fixture.detectChanges();
  }); 

  // it('should have 8 elements with class "validator-color-cnt"', () => {
  //   fixture.detectChanges(); 
  //   const validatorElements = fixture.debugElement.queryAll(By.css('.validator-color-cnt'));
  //   expect(validatorElements.length).toEqual(8);
  // });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should bind formControlName to corresponding input fields', () => {
    const firstNameInput = fixture.nativeElement.querySelector('input[formControlName="firstName"]');
    const lastNameInput = fixture.nativeElement.querySelector('input[formControlName="lastName"]');
    expect(firstNameInput).toBeTruthy();
    expect(lastNameInput).toBeTruthy();
  });

  it('should bind formControlName to corresponding input fields', () => {
    const emailInput = fixture.nativeElement.querySelector('input[formControlName="email"]');
    const passwordInput = fixture.nativeElement.querySelector('input[formControlName="firstName"]');
    expect(emailInput).toBeTruthy();
    expect(passwordInput).toBeTruthy();
  });

  
  it('should initialize registerForm with empty fields', () => {
    expect(component.registerForm.value).toEqual({ firstName: '', lastName: '', email: '', password: '' });
  });

  it('should set submitted to true when registerUser is called', () => {
    component.registerUser();
    expect(component.submitted).toBeTruthy();
  });

});