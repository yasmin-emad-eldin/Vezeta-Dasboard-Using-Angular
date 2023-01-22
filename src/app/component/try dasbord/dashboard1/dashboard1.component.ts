import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Adminlogin } from 'src/app/models/adminlogin';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-dashboard1',
  templateUrl: './dashboard1.component.html',
  styleUrls: ['./dashboard1.component.scss']
})
export class Dashboard1Component implements OnInit {
showw1:boolean=true;
showw2:boolean=false;
showw3:boolean=false;
showw4:boolean=false;
showw5:boolean=false;
showw6:boolean=false;
showw7:boolean=false;

showchart:boolean=true;

  constructor( private router:Router) { }
  ngOnInit(): void {

  }
  OnInit(){}

  show1(){
    this.showw1=true
    this.showw2=false
    this.showw3=false
    this.showw4=false
    this.showw5=false
    this.showchart=true;
    this.showw6=false
    this.showw7=false

  }
show2(){
  this.showw2=true
  this.showw1=false
  this.showw3=false
  this.showw4=false
  this.showw5=false
  this.showchart=false;
  this.showw6=false
  this.showw7=false

}
show3(){
  this.showw3=true
  this.showw1=false
  this.showw2=false
  this.showchart=false;
  this.showw5=false
  this.showw6=false
  this.showw7=false

}
show4(){
  this.showw4=true

  this.showw3=false
  this.showw1=false
  this.showw2=false
  this.showchart=false;
  this.showw5=false
  this.showw6=false
  this.showw7=false

}
show5(){
  this.showw4=false

  this.showw3=false
  this.showw1=false
  this.showw2=false
  this.showchart=false;
  this.showw5=true
  this.showw6=false
  this.showw7=false

}
show6(){
  this.showw4=false
  this.showw3=false
  this.showw1=false
  this.showw2=false
  this.showchart=false;
  this.showw5=false
  this.showw6=true
  this.showw7=false

}
show7(){
  this.showw4=false
  this.showw3=false
  this.showw1=false
  this.showw2=false
  this.showchart=false;
  this.showw5=false
  this.showw6=false
  this.showw7=true

}
///adminprofile///////




rout(){
this.router.navigate(["adminprofile"])

}
///////////////////////
}
