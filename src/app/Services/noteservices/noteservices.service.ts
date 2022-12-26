import { Injectable } from '@angular/core';
import { HttpservicesService } from '../httpservices/httpservices.service';
import { HttpHeaders } from '@angular/common/http';
import { Token } from '@angular/compiler';



@Injectable({
  providedIn: 'root'
})
export class NoteservicesService {
 token : any;

  constructor(private httpService: HttpservicesService ) {
    this.token=localStorage.getItem('Token')
  }

  addnote(reqdata:any){
    console.log(reqdata);
    console.log(this.token);
    let header = {
      headers :new HttpHeaders({
        'Content-type':'application/json',
         'Authorization': 'Bearer ' + this.token 
      })
    }
    return this.httpService.postService('/Notes/CreateNotes',reqdata,true,header)
  }

getAllNotes(){
  let header = {
    headers : new HttpHeaders({
      'Content-type' : 'application/json',
      'Authorization': 'Bearer ' + this.token 

    })
  }
  return this.httpService.getService('/Notes/GetallNotes',true,header)

}

}
