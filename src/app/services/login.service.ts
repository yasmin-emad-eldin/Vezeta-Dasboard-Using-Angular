import { HttpClient, HttpHeaders,HttpResponse  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Adminlogin } from '../models/adminlogin';
import { Admins } from '../models/admins';
import { Doctors } from '../models/doctors';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  userId:any;
  userlogout:any;
  AdminToken:any;
  AdminId:any;
  AdminIdpofile:any;

y:any;
  private isUserLoggedSubject:BehaviorSubject<boolean>;
  private isUserLoggedSubject1:BehaviorSubject<boolean>;
  private isUserLoggedSubject2:BehaviorSubject<boolean>;

  private httpoptions={};

constructor(private http: HttpClient, private router: Router,private httpclient:HttpClient) {
  this.isUserLoggedSubject=new BehaviorSubject<boolean>(this.isUserLogged);
  this.isUserLoggedSubject1=new BehaviorSubject<boolean>(this.isUserLogged1);
  this.isUserLoggedSubject2=new BehaviorSubject<boolean>(this.isUserLogged2);

  this.httpoptions={
    headers:new HttpHeaders({
      'Content-Type':'application/json',
      'responseType': 'text',
      observe:'response'
    }),
  }
}

  login(userEmail:string,password:string) {
    let userToken='admin'
    localStorage.setItem("token",userToken);
    localStorage.setItem("AdminToken",this.AdminToken);
    localStorage.setItem("AdminId",this.AdminId);

    this.isUserLoggedSubject.next(true);


  }
  logout(){
    localStorage.removeItem("token");
    localStorage.removeItem("AdminToken");
    localStorage.removeItem("AdminId");

    this.isUserLoggedSubject.next(false);
    this.isUserLoggedSubject1.next(false);
    this.isUserLoggedSubject2.next(false);


  }

  // readonly property
  get isUserLogged(){
    return (localStorage.getItem('token'))?true:false;
  }
  get isUserLogged1(){
    return (localStorage.getItem('AdminToken'))?true:false;
  }
  get isUserLogged2(){
    return (localStorage.getItem('AdminId'))?true:false;
  }
  getLoggedStatus(){
    return this.isUserLoggedSubject;
    
  }
  getLoggedStatus1(){
    return this.isUserLoggedSubject1;
    
  }
  getLoggedStatus2(){
    return this.isUserLoggedSubject2;
    
  }
  getalluser(): Observable<Adminlogin[]>{
    return this.httpclient.get<Adminlogin[]>(`${environment.APIBaseURL}/user`);
  }

  getSingleUser(id:number):Observable<Adminlogin>{
    return this.httpclient.get<Adminlogin>(`${environment.APIBaseURL}/user/${id}`);
    // http://localhost:3000/nooncateogry

  }

getUpdateUser(data:Adminlogin):Observable<Adminlogin>{

  return this.httpclient.put<Adminlogin>(`${environment.APIBaseURL}/user/${data.id}`,data,this.httpoptions)

}
getallusers(): Observable<Adminlogin[]>{
  return this.httpclient.get<Adminlogin[]>(`${environment.APIBaseURL}/users`);
}
getalldoctors(): Observable<Adminlogin[]>{
  return this.httpclient.get<Adminlogin[]>(`${environment.APIBaseURL}/doctors`);
}
deleteusers(id:number):Observable<Adminlogin>{

  return this.httpclient.delete<Adminlogin>(`${environment.APIBaseURL}/users/${id}`)

}
deletedoctors(id:number):Observable<Adminlogin>{

  return this.httpclient.delete<Adminlogin>(`${environment.APIBaseURL}/doctors/${id}`)

}
loginadmins(adminEmail:any):Observable<Admins>{
  return this.httpclient.post<Admins>(`${environment.APIBaseURL1}/admin-login` ,JSON.stringify(adminEmail),

  this.httpoptions);

}
////////////or/////////////
// loginadmins1(payload:any){
//     return this.httpclient.get(`${environment.APIBaseURL1}/admin-login`,payload);
  
//   }
  doctors(num:number){
    return this.httpclient.get<any>(`${environment.APIBaseURL1}/user-doctor-search?page=${num}`);
  
  }
  
  addNewUser(newpro:any):Observable<any>{

    return this.httpclient.post<any>(`${environment.APIBaseURL1}/admin-register`

                                    ,JSON.stringify(newpro),

                                              this.httpoptions)

                                          

    }
    // userLogin1(payload:any):Observable<HttpResponse<any>>{
    //   return this.http.post<any>(`${environment.APIBaseURL1}/angular-admin-login`, payload, { observe: 'response'})
    // }

    //  userLogin1(payload:any):Observable<any>{

    //   return this.http.post<any>(`${environment.APIBaseURL1}/angular-admin-login`, payload, { observe: 'response'})
    // }
    userLogin1(payload:any):Observable<any>{
      let userToken='admin'
      localStorage.setItem("token",userToken);
      localStorage.setItem("AdminToken",this.AdminToken);
      localStorage.setItem("AdminId",this.AdminId);
  
      this.isUserLoggedSubject.next(true);
      this.isUserLoggedSubject1.next(true);
      this.isUserLoggedSubject2.next(true);

   return   this.http.post<any>(`${environment.APIBaseURL1}/angular-admin-login`, payload, { observe: 'response'})
  //   // return user;
  //  return console.log("userservice",user)

  // }))
    }
   
    adminProfile():Observable<any>{
      this. y=localStorage.getItem("AdminToken")

    let headers = new HttpHeaders()
     .set('Admin-Token',this.y)
     let x=localStorage.getItem("AdminId")
   return this.http.get<any>(`${environment.APIBaseURL1}/admin-profile/${x}`,{'headers':headers})
    }
  
////////////////////////////////////
pendingDoctor(num:number):Observable<any>{
  this. y=localStorage.getItem("AdminToken")
  let headers = new HttpHeaders()
   .set('Admin-Token',this.y)
   let x=localStorage.getItem("AdminId")
  return this.http.get<any>(`${environment.APIBaseURL1}/admin-pending-doctors?page=${num}`,{'headers':headers})

}
RegigtedDoctor(num:number):Observable<any>{
  this. y=localStorage.getItem("AdminToken")
  let headers = new HttpHeaders()
   .set('Admin-Token',this.y)
   let x=localStorage.getItem("AdminId")
  return this.http.get<any>(`${environment.APIBaseURL1}/admin-deleted-doctors?page=${num}`,{'headers':headers})

}
AcceptedDoctor(num:number):Observable<any>{
  this. y=localStorage.getItem("AdminToken")
  let headers = new HttpHeaders()
   .set('Admin-Token',this.y)
   let x=localStorage.getItem("AdminId")
  return this.http.get<any>(`${environment.APIBaseURL1}/user-doctor-search?page=${num}`)

}

deletePendingDoctor(idp:number,id:any):Observable<any>{
  this. y=localStorage.getItem("AdminToken")
  let headers = new HttpHeaders()
   .set('Admin-Token',this.y)
   let x=localStorage.getItem("AdminId")
   const body = { profileStatus: 'accepted' };
  //  {profileStatus: "accepted"}
  return this.http.post<any>(`${environment.APIBaseURL1}/admin-delete-doctor/${idp}`,id,{'headers':headers})
}
editePendingDoctor(idp:number,id:any):Observable<any>{
  this. y=localStorage.getItem("AdminToken")
  let headers = new HttpHeaders()
   .set('Admin-Token',this.y)
   let x=localStorage.getItem("AdminId")
  //  {profileStatus: "accepted"}
  return this.http.post<any>(`${environment.APIBaseURL1}/admin-edit-doctor/${idp}`,id,{'headers':headers})
}
SingleDoctor():Observable<any>{
  localStorage.setItem("AdminIdpofile",this.AdminIdpofile);

  this. y=localStorage.getItem("AdminToken")
  let headers = new HttpHeaders()
   .set('Admin-Token',this.y)
   let x=localStorage.getItem("AdminIdpofile")
   localStorage.setItem("AdminId",this.AdminId);

  return this.http.get<any>(`${environment.APIBaseURL1}/admin-doctor-profile/${x}`,{'headers':headers})
}
// user(num:number):Observable<any>{
//   this. y=localStorage.getItem("AdminToken")
//   let headers = new HttpHeaders()
//    .set('Admin-Token',this.y)
//    let x=localStorage.getItem("AdminId")
//   return this.httpclient.get<any>(`${environment.APIBaseURL1}/admin-all-users?page=${num}`),{'headers':headers};

// }
user(num:number):Observable<any>{
  this. y=localStorage.getItem("AdminToken")
  let headers = new HttpHeaders()
   .set('Admin-Token',this.y)
   let x=localStorage.getItem("AdminId")
  return this.http.get<any>(`${environment.APIBaseURL1}/admin-all-users?page=${num}`,{'headers':headers})

}
}
