import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../../SHARED/apiservice.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProfileComponent } from '../PROFILE-C/profile/profile.component';
import { UserprofileComponent } from '../PROFILE-C/userprofile/userprofile.component';


@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {

  constructor(private api: ApiserviceService, private modalService: NgbModal) { }

  ngOnInit(): void { this.fn_list();
  }

  public options: string[];
  public friends: any = {
    search: ''
  }
  public friendlist:any=[];


  fnSearch() {
    this.api.methPOst('frndSearch',this.friends).subscribe((res) => {
      // console.log(res)
      this.options = res['data']
    })
  }

  valuechangeMaterial(e) {
    this.friends.search = e;
    // console.log(this.friends);
  }

  fn_View(id) {
    const modalRef = this.modalService.open(UserprofileComponent, { size: 'lg', centered: true });
    let data =id._id
    modalRef.componentInstance.fromParent = data;

  }
  fn_list() {
    this.api.methPOst('friends',this.options).subscribe((res) => {
      this.friendlist = res['data']
      // console.log(this.friendlist)

    })
  }

}
