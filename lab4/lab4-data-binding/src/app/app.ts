import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Listcomponent } from './listcomponent/listcomponent';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Listcomponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('lab4-data-binding');
  count:number =0;
  hide:boolean = false
  onbuttonclick(){
    this.count++;
  }

  onImgDblClick(){
    this.hide = !this.hide;
  }
}
