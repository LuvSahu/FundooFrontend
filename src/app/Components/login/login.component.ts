import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserservicesService } from 'src/app/Services/userservices/userservices.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  LoginForm!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,private user : UserservicesService) { }

  ngOnInit() {
    this.LoginForm = this.formBuilder.group({

      email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],

    });
  }
    get f() { return this.LoginForm.controls; }
    onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.LoginForm.valid) {
    let reqdata={
      
        email: this.LoginForm.value.email,
        password: this.LoginForm.value.password,
      
      } 
      this.user.login(reqdata).subscribe((response: any) =>{
        console.log(response);
      }) 
    }
  
  }
  onReset() {
    this.submitted = false;
    this.LoginForm.reset();
  }

}
