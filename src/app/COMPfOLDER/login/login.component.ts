import { Component, OnInit, Output, Input, } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiserviceService } from "../../apiservice.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private api: ApiserviceService, public route:Router,) { }

  ngOnInit(): void {
  }
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  public data = true;

  submit() {
    this.api.login(this.form.value).subscribe(data => {
      this.data = data['apistatus']
      console.log(data)
      if(data['apistatus'] == true){
        localStorage.setItem('token' , data['token']);
        localStorage.setItem('id' , data['id']);
        this.route.navigate(['/mainui'])
        
      }else{
        console.log('false messagw');
        
      }
     
    });
  }

}
