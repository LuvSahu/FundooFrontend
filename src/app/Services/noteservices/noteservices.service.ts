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
  console.log(reqdata.noteid)
    console.log("token", this.token)
 
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpService.putService(`/Notes/Update?noteid=${reqdata.noteid}`, reqdata, true, header)
  }

  deleteNote( reqdata: any) {
    // console.log(noteid)
    // console.log("token", this.token)
    // console.log(reqdata)
    console.log(reqdata.noteid)

    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    
    return this.httpService.putService(`/Notes/Trash?noteid=${reqdata.noteid}`,reqdata,true, header)
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

    colorPallete(reqdata:any){
      console.log(reqdata)

      let header = {
        headers: new HttpHeaders({
          'Content-Type' : 'application/json',
          'Authorization' : 'Bearer ' + this.token
        })
    }

    return this.httpService.putService(`/Notes/Color?NotesID=${reqdata.NotesID}&${reqdata.Color}`,reqdata,true,header)
  }

}
