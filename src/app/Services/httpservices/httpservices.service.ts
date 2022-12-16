import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpservicesService {
  baseUrl="https://localhost:44314/api";


  constructor(private httpClient: HttpClient) { }
  postService(url:string,reqdata:any,token: boolean=false,httpOptions:any={}){
    return this.httpClient.post(this.baseUrl+url,reqdata,token&&httpOptions)
}

putService(url:string,reqdata:any,token: boolean=false,httpOptions:any={}){
  return this.httpClient.put(this.baseUrl+url,reqdata,token&&httpOptions)
}

}
