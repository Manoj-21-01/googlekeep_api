import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login.component';
import { UserService } from 'src/app/services/user-services/user.service';
import { HttpService } from 'src/app/services/http-services/http.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let userService: UserService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
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
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    userService = TestBed.get(UserService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should bind formControlName to corresponding input fields', () => {
    const emailInput = fixture.nativeElement.querySelector('input[formControlName="email"]');
    expect(emailInput).toBeTruthy();
  });

  it('should bind formControlName to corresponding input fields', () => {
    const passwordInput = fixture.nativeElement.querySelector('input[formControlName="password"]');
    expect(passwordInput).toBeTruthy();
  });

  it('should initialize loginForm with empty fields', () => {
    expect(component.loginForm.value).toEqual({ email: '', password: '' });
  });

  it('should set submitted to true when loginUser is called', () => {
    component.loginUser();
    expect(component.submitted).toBeTruthy();
  });

});
