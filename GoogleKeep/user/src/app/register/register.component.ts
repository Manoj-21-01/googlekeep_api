import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from 'src/app/services/user-services/user.service';
import { map } from 'rxjs/operators';

@Component({ 
  selector: 'app-register', 
  templateUrl: 'register.component.html',
  styleUrls: ['./register.component.css'],
  host: {
    class: "app-register-cnt"
  }
})
export class RegisterComponent implements OnInit {
  registerForm !: FormGroup
  submitted: boolean = false
  ngOnInit(): void {
    
  }
    constructor(private formBuilder: FormBuilder, public userService: UserService) {
      this.registerForm = this.formBuilder.group({
        firstName: ['',[Validators.required, Validators.minLength(3)]],
        lastName: ['',[Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
        password: ['', [Validators.required, Validators.minLength(6)]]
      });
    }

        get f() {
          return this.registerForm.controls;
        }
        registerUser(){
          this.submitted = true;
          const {firstName, lastName, email, password} = this.registerForm.value;
          this.userService.registerUser({
            "firstName": firstName,
            "lastName": lastName,
            "email": email,
            "password": password,
            "service":"advance"
          }).subscribe((result)=>{console.log(result);},error=>{console.log(error);});
          console.log(this.registerForm.value);
        }
        
}