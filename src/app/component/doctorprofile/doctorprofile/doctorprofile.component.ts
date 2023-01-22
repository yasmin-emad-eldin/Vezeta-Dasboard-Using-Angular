import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctors } from 'src/app/models/doctors';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-doctorprofile',
  templateUrl: './doctorprofile.component.html',
  styleUrls: ['./doctorprofile.component.css']
})
export class DoctorprofileComponent implements OnInit {
doctorProfile:any
doctorProfile1:any
  constructor(private userauth:LoginService,private router:Router) { }

  ngOnInit() {
      this.userauth.SingleDoctor().subscribe(res=>{
        console.log(res.body)
        // console.log(res.body.doctorClinics[0])
      console.log( res.body.doctorName)
      this.doctorProfile=res.body

      this.doctorProfile1=res.body.doctorName
    console.log(JSON.parse(this.doctorProfile1))

//         console.log(res.body._id)
//         console.log(res.body.doctorName)
//         console.log(res.body.doctorName.englishName)

        
// console.log(this.doctorProfile.doctorName.englishName)
// console.log(this.doctorProfile.profileImagePath)
// console.log(this.doctorProfile.profileStatus)
// console.log(this.doctorProfile.doctorEmail)
// console.log(this.doctorProfile.doctorGender)
// console.log(this.doctorProfile.doctorSpecialization.specialization_english)
// console.log(this.doctorProfile.doctorLocation)
// console.log(this.doctorProfile.fees)
// console.log(this.doctorProfile.profileImagePath)
// console.log(this.doctorProfile.clinicImagesPath[0].image)

       })
  

}
deletedoctors(id:number){
  const body = { profileStatus: 'rejected' };
  if(confirm("do you want delete the doctor ")){

     this.userauth.deletePendingDoctor(id,body).subscribe(data => {
alert(`delete doctor`)

this.router.navigate(['/dashboard1']);

})
      
      }else{
        alert("you cancel delete")
      }
  }
  editedoctors(id:number){
    const body = { profileStatus: 'accepted' };
    if(confirm("do you want accept the doctor ?")){

       this.userauth.deletePendingDoctor(id,body).subscribe(data => {
alert(`accepted doctor`)
this.router.navigate(['/dashboard1']);

})
        }else{
          alert("you cancel accepted")
        }
    }

}