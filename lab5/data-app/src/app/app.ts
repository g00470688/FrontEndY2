import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './services/data-service';
import { WeatherService } from './services/weather-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  students:any[] =[];
  weather:any[] =[];
  constructor(private dataService:DataService, private WeatherS:WeatherService){}
  protected readonly title = signal('data-app');
  ngOnInit(): void {

    this.dataService.GetStudentData().subscribe(// subscribing to the dataservice to get student data
      (data) =>{
        this.students = data.students;
        console.log(this.students);
      }
    );
    
     this.WeatherS.GetWeatherInfo().subscribe( // subscribing to a weather service
       (data) =>{
         this.weather = data.weather;
         console.log(this.weather);
       }
     );

  }
}
