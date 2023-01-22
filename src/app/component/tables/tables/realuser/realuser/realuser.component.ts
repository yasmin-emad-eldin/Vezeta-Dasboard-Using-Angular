import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-realuser',
  templateUrl: './realuser.component.html',
  styleUrls: ['./realuser.component.scss']
})
export class RealuserComponent implements OnInit {
  searchTerm = '';
  term = '';
  totalpages:any;
  user:any
  pages: number = 1;
  arrayOfDigits: any[]=[];
  idDoctortransfar:any;
  constructor(private userauth: LoginService,  private router:Router,private http: HttpClient) { }

  
  ngOnInit(): void {
    this.userauth.user(this.pages).subscribe(res=>{
      
      // console.log(res.body[0].doctorEmail)
      // console.log(res.totalPages)
      this.totalpages=res.totalPages
      this.user=res.body
          console.log(res)

    for (var i = 1; i <=this.totalpages; i++) {
      this.arrayOfDigits.push(i);
    }
  // this.doctorfilter.getalldoctors().subscribe((data: Adminlogin[]) => {
  //       this.doctors = data;
  //     });
    })
  }
  pageid(id:number){

    this.userauth.user(id).subscribe({next:(data)=> {
      // console.log(data.body[0].doctorEmail)
      this.user=data.body
  
    }})
}
}