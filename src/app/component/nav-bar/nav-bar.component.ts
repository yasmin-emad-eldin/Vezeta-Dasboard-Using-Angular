import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  isuserLogged:boolean;
  isuserout:any;

  constructor(private userauth:LoginService,) {
    this.isuserLogged=this.userauth.isUserLogged;
    // console.log(this.isuserLogged);

  }

  ngOnInit(): void {

    // this.isuserLogged=this.userauth.isUserLogged;
    this.userauth.getLoggedStatus().subscribe(status => {
      // true or false
      this.isuserLogged=status;
      console.log(this.isuserLogged);
      this.isuserout=this.userauth.userlogout

    });


}
userLogout(){
if(this.isuserout==true){
  this.userauth.logout();
  this.isuserLogged=!this.userauth.isUserLogged;
}
else{
  this.isuserLogged=this.userauth.isUserLogged;

}
}

}
