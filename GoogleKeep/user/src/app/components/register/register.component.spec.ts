import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterComponent } from './register.component';
import { MatIconModule } from '@angular/material/icon';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { HttpClientModule } from '@angular/common/http';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterComponent, SidenavComponent],
      imports: [MatIconModule, HttpClientModule],
    }).compileComponents;
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a valid form', () => {

    component.registerForm.controls['firstName'].setValue('Manoj');
    component.registerForm.controls['lastName'].setValue('Veluru');
    component.registerForm.controls['email'].setValue('manoj@gmail.com');
    component.registerForm.controls['password'].setValue("manoj1");
    component.registerForm.controls['confirmPassword'].setValue("manoj1");
    expect(component.registerForm.valid).toBeTruthy();
  });

  it('should show error messages for required fields', () => {
    const firstName = component.registerForm.controls['firstName'];
    const lastName = component.registerForm.controls['lastName'];
    const email = component.registerForm.controls['email'];
    const password = component.registerForm.controls['password'];
    const confirmPassword = component.registerForm.controls['confirmPassword'];

    expect(firstName.errors?.['required']).toEqual("Manoj");
    expect(lastName.errors?.['required']).toEqual("Veluru");
    expect(email.errors?.['required']).toEqual("manoj@gmail.com");
    expect(password.errors?.['required']).toBeTruthy();
    expect(confirmPassword.errors?.['required']).toBeTruthy();
  });
});