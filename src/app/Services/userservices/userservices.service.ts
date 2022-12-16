import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpservicesService } from '../httpservices/httpservices.service';

@Injectable({
  providedIn: 'root'
})
export class UserservicesService {

  constructor(private httpService: HttpservicesService) { }

  regestration(reqdata:any){
    console.log(reqdata);

    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        
      })
    }
    return this.httpService.postService('/User/Register',reqdata,false,header)
  }

  login(reqdata:any){
    console.log(reqdata);
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        
      })
    }
    return this.httpService.postService('/User/Login',reqdata,false,header)
  }

  forgotemail(reqdata:any){
    console.log(reqdata);
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        
      })
    }
    return this.httpService.postService('/User/ForgotPassword?Email='+reqdata.Email,{},false,header)
  }

  forgotpassword(reqdata:any){
    console.log(reqdata);
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        
      })
    }
    return this.httpService.putService('/User/ResetPassword',reqdata,false,header)
  }
}
