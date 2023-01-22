import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators} from '@angular/forms';
    
@Component({
  selector: 'app-addadmin2',
  templateUrl: './addadmin2.component.html',
  styleUrls: ['./addadmin2.component.scss']
})
export class Addadmin2Component {
   imageSrc: any;
   selectedFile:any;
   a:any;
   b:any;
   c:any;
   d:any;
   myForm = new FormGroup({
    adminName: new FormControl('', [Validators.required]),
    adminEmail: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    mainAdminAuthenticationCode: new FormControl('', [Validators.required]),
    profileImagePath: new FormControl('', [Validators.required]),

    // fileSource: new FormControl('', [Validators.required])
  });
  
  constructor(private http: HttpClient) { }
    
  get f(){
    return this.myForm.controls;
  }
   
  onFileChange(event:any) {
    console.log(event);
    
    this.selectedFile = event.target.files[0]
console.log(this.selectedFile);
    // this.myForm.value.profileImagePath=event.target.files[0];
    // console.log(this.myForm.value.profileImagePath);
    // const reader = new FileReader();
    
    // if(event.target.files && event.target.files.length) {
    //   const [file] = event.target.files;
    //   reader.readAsDataURL(file);
    
    //   reader.onload = () => {
   
    //     this.imageSrc = reader.result as string;
     
    //     this.myForm.patchValue({
    //       fileSource: reader.result as any
    //     });
   
    //   };
   
    // }
  }
   
  submit(){
    this.myForm.value.profileImagePath=this.selectedFile
     console.log(this.myForm.value.profileImagePath);
    const uploadData = new FormData();
    this.a=this.myForm.value.adminName
    this.b=this.myForm.value.adminEmail
    this.c=this.myForm.value.password
    this.d=this.myForm.value.mainAdminAuthenticationCode
console.log(this.a);
console.log(this.b);
console.log(this.c);
console.log(this.d);

  uploadData.append('adminName',this.a);
  uploadData.append('adminEmail', this.b);
  uploadData.append('password', this.c);
  uploadData.append('mainAdminAuthenticationCode', this.d);
  uploadData.append('profileImagePath', this.selectedFile);
console.log(uploadData)

    console.log(this.myForm.value);
    this.http.post('https://vezeeta-data-api.herokuapp.com/admin-register',uploadData).subscribe(res => {
        alert('Uploaded Successfully.');})
  }
}