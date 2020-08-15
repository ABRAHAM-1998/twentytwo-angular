import { Injectable } from '@angular/core';
import { environment } from "../environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { threadId } from 'worker_threads';


@Injectable({
  providedIn: 'root'
})

export class ApiserviceService {


  constructor(private http: HttpClient) { }

  private rootURL = '/api';
  private token = localStorage.getItem('token')
  private usertokenId = localStorage.getItem('id')


  register(para: any) {
    return this.http.post(this.rootURL + '/register', para);
  }

  login(para: any) {
    return this.http.post(this.rootURL + '/login', para);
  }
  post(path: string = "", para: any) {
    return this.http.post(this.rootURL + path, para);
  }

  fun_apiPostImage( param:any){

    return this.http.post(this.rootURL + '/upload', param);
  }
  newPost(para:any){
    return this,this.http.post(this.rootURL + '/newpost',para);
  }
  // postsdata(para:any){
  //   return this.http.post(this.rootURL + '/getposts',para);
  // }
  frndSearch(para:any){
    return this.http.post(this.rootURL + '/frndSearch',para);
  }

  methPOst(path: string = "", param: object): Observable<any> {
    let options = {
      headers: this.setHeaders()
    }
    return this.http.post(this.myurl(this.rootURL, path), param, options)
  }






  private setHeaders() {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Headers': '*',
      'Authorization': `${this.getToken()}`,
      'usertoken':`${this.usertoken()}`
    });
    return headers;
  }
  getToken() {
    //store to local and fetch here
    return this.token;
  }
  usertoken(){
    return this.usertokenId;
  }
  private myurl(host,apiPath) {
    return `${host}/${apiPath}`;
  }
} 
