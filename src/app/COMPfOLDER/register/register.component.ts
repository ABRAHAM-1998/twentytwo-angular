import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiserviceService } from '../../SHARED/apiservice.service';

import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { fn } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    private api: ApiserviceService,
    private formBuilder: FormBuilder,
    public modalservice: NgbModal,
    public route: Router
  ) { }

  ngOnInit(): void {
  }
  form = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    email: ['', [Validators.required, Validators.minLength(7)]],
    mobile: ['', Validators.required],
    dob: ['', Validators.required],
    username: ['', Validators.required],
    password: ['', Validators.required],
    repassword: ['', Validators.required],
    imgurl:''
  });
  public checck = {
    name: true,
    email: true,
    dob: true,
    password: true,
    mobile: true,
    username: true
  }
  public userexists = {
    name: true,
    email: true,
    mobile: true,
    username: true
  }
  public internlErr: any = []
  submit() {

    if (this.form.value.name) {
      this.checck.name = true
    } else {
      this.checck.name = false
    }
    if (this.form.value.email) {
      this.checck.email = true
    } else {
      this.checck.email = false
    }
    if (this.form.value.username) {
      this.checck.username = true
    } else {
      this.checck.username = false
    }
    if (this.form.value.password === this.form.value.repassword) {
      this.checck.password = true
    } else {
      this.checck.password = false
    }
    if (this.form.value.mobile) {
      this.checck.mobile = true
    } else {
      this.checck.mobile = false
      // &&this.checck.email == true &&this.checck.name == true &&this.checck.password == true &&this.checck.username ==true
    } if (this.checck.dob == true &&this.checck.email == true &&this.checck.name == true &&this.checck.password == true &&this.checck.username ==true) {
      this.api.methPOst('register', this.form.value).subscribe((res) => {
        console.log(res)
        // console.log('registration susccess',this.form.value)


        if (res['apistatus'] == true) {
          this.form.reset()
          console.log('succes registration completed');
          this.fn_reDirect();

        } else {
          this.fn_chechErr(res)
        }
      }, (error) => {
        this.internlErr = error
        this.fn_chechErr(error);
        // let i = 0;
        // for (i = 0; i < 5; i++) {
        //   // console.log(this.internlErr.error.arrMsg[i])
        //   if (this.internlErr.error.arrMsg[i] == 'NAME_FALSE') {
        //     this.userexists.name == false;
        //   } else if (this.internlErr.error.arrMsg[i] == 'USERNAME_FALSE') {
        //     console.log('userna,e is not valisd')
        //     this.userexists.username == false;
        //   } else if (this.internlErr.error.arrMsg[i] == 'EMAIL_FALSE') {
        //     console.log('EMAIL,e is not valisd')
        //     this.userexists.email == false;
        //     console.log(this.userexists.email)


        //   } else if (this.internlErr.error.arrMsg[i] == 'MOBILE_FALSE') {
        //     console.log('mobile,e is not valisd')
        //     this.userexists.mobile == false;


        //   } else {
        //     return false
        //   }
        // }


      })
    } else {
      console.log('registration failed')

    }

  }
  openDilog(content1) {
    this.modalservice.open(content1, { size: 'md', centered: true });

  }
  fn_close() {
    this.modalservice.dismissAll()
  }
  fn_reDirect() {
    this.route.navigate(['login'])

    console.log('redirected');

  }
  fn_chechErr(data) {

    console.log(data, 'this is my consoled data');
    let i = 0;
    for (i = 0; i < 5; i++) {
      // console.log(this.internlErr.error.arrMsg[i])
      if (this.internlErr.error.arrMsg[i] == 'NAME_FALSE') {
        this.userexists.name = false;
        console.log(this.userexists)
      } else if (this.internlErr.error.arrMsg[i] == 'USERNAME_FALSE') {
        console.log('userna,e is not valisd')
        this.userexists.username = false;
      } else if (this.internlErr.error.arrMsg[i] == 'EMAIL_FALSE') {
        console.log('EMAIL,e is not valisd')
        this.userexists.email = false;
        console.log(this.userexists.email)


      } else if (this.internlErr.error.arrMsg[i] == 'MOBILE_FALSE') {
        console.log('mobile,e is not valisd')
        this.userexists.mobile = false;


      } else {
        return false
      }
    }

  }
  
}