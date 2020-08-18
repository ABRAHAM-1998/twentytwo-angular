import { Injectable,OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService implements OnInit {
  private messageSource = new BehaviorSubject(localStorage.getItem('id'));
  currentMessage = this.messageSource.asObservable();
  data={
    _id:localStorage.getItem('id')
  }

  constructor() { }
  ngOnInit(): void {
    console.log('thi sis ,yy')

    
  }
  
}
export class fromparent {
  data={
    localStorage:localStorage.getItem('id')
  }
}
