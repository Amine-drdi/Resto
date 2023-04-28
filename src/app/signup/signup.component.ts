import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder , Validators  } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup ;
  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
 
    this.signupForm= this.formBuilder.group({
      firstName: ["" , [Validators.required, Validators.minLength(3) ]],
      lastName: ["" , [Validators.required, Validators.minLength(5) ]],
      email: ["",[ Validators.email , Validators.required]],
      password: ["" , [Validators.required, Validators.minLength(6) ]],
      confirmPassword: ["" , [Validators.required, Validators.minLength(6) ]]
    })
  }
  singup(){
   console.log("here object" , this.signupForm.value);
  } 
}


