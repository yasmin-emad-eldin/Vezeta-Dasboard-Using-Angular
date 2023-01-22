import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor(private userauth: LoginService,private http: HttpClient,private router:Router,private ActiceRooter:ActivatedRoute,private loction:Location) { }

  ngOnInit() {
  
  }
}
