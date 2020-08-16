import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from ".././apiservice.service";
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar-main',
  templateUrl: './navbar-main.component.html',
  styleUrls: ['./navbar-main.component.scss']
})
export class NavbarMainComponent implements OnInit {

  constructor(private api: ApiserviceService,private sanitizer:DomSanitizer,private route:Router) { }


  transform(){
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.pdata['imgurl']);
}

  ngOnInit(): void {
    this.fn_UserProfile();
  }
  public pdata =[]
  fn_UserProfile() {
    let data ={ id: localStorage.getItem('id') }

    this.api.post('/userp',data).subscribe((res) => {
      // console.log(res);
      this.pdata = res['arrList']
    }, (error) => {
      // console.log(error, 'this is my error')
    })
  }
  fn_logout(){
    localStorage.clear();
    this.route.navigate(['login']);
  }
}
