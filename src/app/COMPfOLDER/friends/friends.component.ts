import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProfileComponent } from '../profile/profile.component';


@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {

  constructor(private api: ApiserviceService, private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  public options: string[];
  public friends: any = {
    search: ''
  }


  fnSearch() {
    this.api.frndSearch(this.friends).subscribe((res) => {
      console.log(res)
      this.options = res['data']
    })
  }

  valuechangeMaterial(e) {
    this.friends.search = e;
    console.log(this.friends);
  }

  fn_View(id) {
    console.log(id._id)
    const modalRef = this.modalService.open(ProfileComponent, { size: 'sm', centered: true });
    modalRef.componentInstance.fromParent = id._id;

  }
}
