import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const key = '6a66416403ed8e5e6e762cb8c261f303' // API key
@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private hClient:HttpClient){}
    GetWeatherInfo():Observable<any>{
      return this.hClient.get(`http://api.openweathermap.org/data/2.5/weather?q=Galway&appid=${key}`)// getting weather JSON from the api
    }
  
}
