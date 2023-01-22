import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { User } from 'src/app/models/user';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class TablefilterService {
  constructor(private httpclientDelte:HttpClient) {

  }
  getallProuduct(): Observable<User[]>{
    return this.httpclientDelte.get<User[]>(`${environment.APIBaseUR}/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8`);
  }
}
