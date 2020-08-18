import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../../SHARED/apiservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private api: ApiserviceService) { }

  ngOnInit(): void {
    this.getPost();
  }
  public data: any = [];
  public postdetails = [];
  getPost() {
    let data = {
    }
    this.api.methPOst('getposts', data).subscribe((res) => {
      // console.log(res);
      this.data = res['data'];
      this.data.forEach(element => {
        // console.log(element.postdetails);
        this.postdetails.push(element.postdetails)

      });
    })

  }

}
