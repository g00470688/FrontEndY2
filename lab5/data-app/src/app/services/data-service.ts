import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private hClient:HttpClient){}

    GetStudentData():Observable<any>{
      return this.hClient.get('https://api.jsonblob.com/019cc30f-879f-7815-b8ab-6b1d3dee6884')
      
    }
}
