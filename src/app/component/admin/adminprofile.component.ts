import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { Adminlogin } from 'src/app/models/adminlogin';
@Component({
  selector: 'app-adminprofile',
  templateUrl: './adminprofile.component.html',
  styleUrls: ['./adminprofile.component.scss']
})
export class AdminprofileComponent implements OnInit {

  isuser:Adminlogin|undefined=undefined;
  idseve:any

  userprof:any;
  newUser:Adminlogin={} as Adminlogin;
  isEidte:boolean=false;
  show:boolean=true;
  constructor(private userauth: LoginService, private router:Router) { }

  ngOnInit(): void {
    this.idseve=this.userauth.userId
    console.log(this.idseve)
    this.userauth.getSingleUser(this.idseve).subscribe(id=>this.userprof=id)

    }

edit(prd:any){
    this.newUser=prd
}

UpdatUser(){

  // this.isEidte=!this.isEidte
  this.userauth.getUpdateUser(this.newUser).subscribe(()=>{
  })


}
rout(){
  this.router.navigate(["adminprofile"])

}
}
