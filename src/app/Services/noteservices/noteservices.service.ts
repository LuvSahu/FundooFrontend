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
    // console.log(this.token);
    let header = {
      headers :new HttpHeaders({
        'Content-type':'application/json',
         'Authorization': 'Bearer ' + this.token 
      })
    }
    return this.httpService.postService('/Notes/Create',reqdata,true,header)
  }

getAllNotes(){
  let header = {
    headers : new HttpHeaders({
      'Content-type' : 'application/json',
      'Authorization': 'Bearer ' + this.token 

    })
  }
  return this.httpService.getService('/Notes/Read',true,header)

}

updateNote(reqdata: any) {
  console.log(reqdata.notesID)
    console.log("token", this.token)
 
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpService.putService(`/Notes/Update?noteid=${reqdata.noteid}`, reqdata, true, header)
  }

  deleteNote( noteid: any) {
    console.log(noteid)
    console.log("token", this.token)
  
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    
    return this.httpService.deleteService(`/Notes/Delete?noteid=${noteid}`,true, header)
  }

  archivenote(reqdata:any){
  console.log(reqdata.noteid)

    let header = {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization' : 'Bearer ' + this.token
      })
    }

      return this.httpService.putService(`/Notes/Archive?noteid=${reqdata.noteid}`,reqdata,true,header)

    }

  }


