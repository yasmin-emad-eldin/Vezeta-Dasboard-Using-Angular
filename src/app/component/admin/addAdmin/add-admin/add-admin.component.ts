import { Component, OnInit,VERSION  } from '@angular/core';
import { FormBuilder,  FormGroup,  Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { Admins } from 'src/app/models/admins';
import { Doctors } from 'src/app/models/doctors';
import { HttpClient } from '@angular/common/http';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.scss']
})
export class AddAdminComponent implements OnInit {
  admin:any
  admin2:any

  constructor(private userauth: LoginService, private router:Router,private http: HttpClient){}
 ngOnInit() {
  this.userauth.adminProfile().subscribe(res=>{
    console.log(res)
    console.log(res.message)
    console.log(res.body._id)
  this.admin=res.body
this.admin2=this.admin._id
   })
 }
}
