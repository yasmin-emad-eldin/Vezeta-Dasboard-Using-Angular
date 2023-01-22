import { Component, OnInit,VERSION  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { Admins } from 'src/app/models/admins';
import { Doctors } from 'src/app/models/doctors';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
x:any
  usrFormGroup: FormGroup;

  isuserLogged:boolean = false;
  isuserLogged1:boolean = false;
  isuserLogged2:boolean = false;

  public loginForm!: FormGroup
  url='https://vezeeta-data-api.herokuapp.com/angular-admin-login'
  user:any
  totalpages:any
  doctor:Doctors[]=[]
  pages: number = 1;
  userlogout:boolean=true;
  userlogout1:boolean=true;
  userlogout2:boolean=true;

  arrayOfDigits: any[]=[]
  constructor(private userauth: LoginService, private fb: FormBuilder, private router:Router,private http: HttpClient){
    this.usrFormGroup=this.fb.group({
 
    adminEmail:['',[Validators.required]],

    password:['',[Validators.required]],
    }

)
  }
  get adminEmail(){
    return this.usrFormGroup.get('adminEmail');
  }
  get password(){
    return this.usrFormGroup.get('password');
  }

  ngOnInit(): void {
    this.isuserLogged=this.userauth.isUserLogged;

    this.isuserLogged1=this.userauth.isUserLogged1;
    this.isuserLogged2=this.userauth.isUserLogged2;

    this.userauth.pendingDoctor(this.pages).subscribe(res=>{
      
      console.log(res.body[0].doctorEmail)
      console.log(res.totalPages)
      this.totalpages=res.totalPages
      this.doctor=res.body
    
    for (var i = 1; i <=this.totalpages; i++) {
      this.arrayOfDigits.push(i);
    }
    })
     
// let headers = new HttpHeaders()
// .set('content-type','application/json')
// .set('Access-Control-Allow-Origin', '*')
   
// const h =headers.get('content-type')

// if (h==null) {
// console.log('content type header not present')
// } else {
// console.log(h)      //returns 'application/json'
// } 
   
  }

  userLogin(){
    this.userauth.login('UserEmail','Password');

    this.userauth.getalluser().subscribe(res=>{

              this. user = res.find((a:any)=>{
 return a.email === this.usrFormGroup.value.email && a.password === this.usrFormGroup.value.password

});

console.log(this.user.id)
this.userauth.userId=this.user.id


                 if(this.user){
                alert('Login Succesful User');

               this.isuserLogged=this.userauth.isUserLogged;
               this.userlogout=this.userauth.userlogout
              this.router.navigate(["adminprofile"])

              }
              else{
                alert("user not found")
                this.isuserLogged=!this.userauth.isUserLogged;
                this.userlogout=!this.userauth.userlogout

              }
            },err=>{
              alert("Something went wrong")
            })

  }

  userLogout(){

    this.userauth.logout();
    this.isuserLogged=this.userauth.isUserLogged;
    this.isuserLogged1=this.userauth.isUserLogged1;
    this.isuserLogged2=this.userauth.isUserLogged2;

  }
  userLogin1(){
  // console.log(this.usrFormGroup.value)
  const userName = this.usrFormGroup.value.adminEmail;
  const password = this.usrFormGroup.value.password;
  // console.log(userName)
  // console.log(password)

this.userauth.userLogin1(this.usrFormGroup.value).subscribe((res)=>{
 this. x=res.headers.get('Admin-Token')
 console.log(res.headers.get('Admin-Token'))
 console.log(res)
 console.log(res.statusText)
 console.log(res.body.message)
 console.log(res.body.body._id)
 this.userauth.AdminToken=res.headers.get('Admin-Token');
 this.userauth.AdminId=res.body.body._id
 this.userauth.userLogin1('UserEmail');
 this.userauth.adminProfile().subscribe(res=>{
  console.log(res)
  console.log(res.message)
  console.log(res.body._id)

 })
 this.router.navigate(['dashboard1']);

//   let headers = new HttpHeaders()
//    .set('content-type','application/json')
//    .set('Access-Control-Allow-Origin', '*')
//    .set('Admin-Token',this.x)
//    .append('content-type','application/x-www-form-urlencoded')
//    .append('Admin-Token','application/x-www-form-urlencoded')

//  const h =headers.getAll('content-type')
//  const y =headers.getAll('Admin-Token')

//  console.log(h)
//  console.log(y)

  // this.user1=res1
  // console.log(this.user1)
  // let output1 = res;
  //       console.log(output1.body.token);
  // console.log(res)
  // console.log(output1.headers.get('Content-Type'));
  // console.log(output1.headers)
  // let header: HttpHeaders = res.headers;
  //           console.log(header.get('Content-Type'))
  //           console.log(header.get('Admin-Token'))

  // const keys = res.headers.keys();
  // console.log(keys)

  
  })}
//     // this. user1 = res1.find((a:any)=>{
//       return a.adminEmail === this.usrFormGroup.value.email && a.password === this.usrFormGroup.value.password
     
   
// })
// if(this.user1){
//   alert('Login Succesful User');

 
// }
// else{
//   alert("user not found")
 
// }
//  })}


pageid(id:number){

  this.userauth.doctors(id).subscribe({next:(data)=> {
    console.log(data.body[0].doctorEmail)
    this.doctor=data.body

  }})
 }

}