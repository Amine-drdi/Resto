import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder , Validators  } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signupForm!: FormGroup ;
  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.signupForm= this.formBuilder.group({
     
      
      email: ["",[ Validators.email , Validators.required]],
      password: ["" , [Validators.required, Validators.minLength(6) ]],
    })
  }

}
