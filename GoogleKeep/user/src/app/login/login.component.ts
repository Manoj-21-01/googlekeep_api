import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from 'src/app/services/user-services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = 'signin';
  loginForm !: FormGroup
  submitted: boolean = false
  ngOnInit(): void {
    
  }
    constructor(private formBuilder: FormBuilder, public userService: UserService) {
      this.loginForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
        password: ['', [Validators.required, Validators.minLength(6)]]
      });
    }

        get f() {
          return this.loginForm.controls;
        }
    loginUser(){
      this.submitted = true;
      const {email, password} = this.loginForm.value;
      this.userService.loginUser({
          "email": email,
          "password": password
        }).subscribe((result)=>{console.log(result);},error=>{console.log(error);});
      console.log(this.loginForm.value);
    }
}