import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserservicesService } from 'src/app/Services/userservices/userservices.service';

@Component({
  selector: 'app-regestration',
  templateUrl: './regestration.component.html',
  styleUrls: ['./regestration.component.scss']
})
export class RegestrationComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,private user : UserservicesService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
        
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],        
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
        
    });
  }
 get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.valid) {
      let reqdata = {
      firstname:this.registerForm.value.firstName,
      lastname:this.registerForm.value.lastName,
      email:this.registerForm.value.email,
      password:this.registerForm.value.password,
      }

      this.user.regestration(reqdata).subscribe((response: any)=>{
        console.log(response);
      });
    }
  }
  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

}
