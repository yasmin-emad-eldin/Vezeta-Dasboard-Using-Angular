import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Adminlogin } from 'src/app/models/adminlogin';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {


  searchTerm = '';
  doctors: Adminlogin[] = [];
  term = '';
  totalpages:any;
  doctor:any
  pages: number = 1;
  arrayOfDigits: any[]=[];
  idDoctortransfar:any;
  constructor(private userauth: LoginService,  private router:Router,private http: HttpClient) { }

  ngOnInit(): void {
    this.userauth.RegigtedDoctor(this.pages).subscribe(res=>{
      
      console.log(res.body[0].doctorEmail)
      console.log(res.totalPages)
      this.totalpages=res.totalPages
      this.doctor=res.body
    
    for (var i = 1; i <=this.totalpages; i++) {
      this.arrayOfDigits.push(i);
    }
  // this.doctorfilter.getalldoctors().subscribe((data: Adminlogin[]) => {
  //       this.doctors = data;
  //     });
    })
  }
  pageid(id:number){

    this.userauth.RegigtedDoctor(id).subscribe({next:(data)=> {
      console.log(data.body[0].doctorEmail)
      this.doctor=data.body
  
    }})
   }
  //   deletedoctors(id:number){

  //     if(confirm("do is delete this product?")){

  //        this.userauth.deletePendingDoctor(id).subscribe(data => {

  //         alert(`delete product ${id}`)
  //   // this.userauth.pendingDoctor(id).subscribe({next:(data)=> {
  //   //   console.log(data.body[0].doctorEmail)
  //   //   this.doctor=data.body
  //   // }})
  //   this.userauth.pendingDoctor(this.pages).subscribe(res=>{
  //     this.doctor=res.body
    
  // // this.doctorfilter.getalldoctors().subscribe((data: Adminlogin[]) => {
  // //       this.doctors = data;
  // //     });
  //   })

    
  //          });
  //         }else{
  //           alert("you cancel delete")
  //         }
  //     }
  deletedoctors(id:number){
    const body = { profileStatus: 'rejected' };
    if(confirm("do you want delete the doctor ")){

       this.userauth.deletePendingDoctor(id,body).subscribe(data => {
alert(`delete doctor`)
this.userauth.pendingDoctor(this.pages).subscribe(res=>{
      
  console.log(res.body[0].doctorEmail)
  console.log(res.totalPages)
  this.totalpages=res.totalPages
  this.doctor=res.body

for (var i = 1; i <=this.totalpages; i++) {
  this.arrayOfDigits.push(i);
}
// this.doctorfilter.getalldoctors().subscribe((data: Adminlogin[]) => {
//       this.doctors = data;
//     });
})
         });
        }else{
          alert("you cancel delete")
        }
    }
    editedoctors(id:number){
      const body = { profileStatus: 'accepted' };
      if(confirm("do you want accept the doctor ?")){
  
         this.userauth.deletePendingDoctor(id,body).subscribe(data => {
  alert(`accepted doctor`)
  this.userauth.pendingDoctor(this.pages).subscribe(res=>{
      
    console.log(res.body[0].doctorEmail)
    console.log(res.totalPages)
    this.totalpages=res.totalPages
    this.doctor=res.body
  
  for (var i = 1; i <=this.totalpages; i++) {
    this.arrayOfDigits.push(i);
  }
// this.doctorfilter.getalldoctors().subscribe((data: Adminlogin[]) => {
//       this.doctors = data;
//     });
  })
           });
          }else{
            alert("you cancel accepted")
          }
      }
      showSingleDoctor(id:number){
        // alert(id)
        this.userauth.AdminIdpofile=id
        this.router.navigate(['/Doctorprofile']);

        }

    }

