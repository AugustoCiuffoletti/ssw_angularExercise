import { Component } from '@angular/core';
import { OpenweatherService } from './openweather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Esercizio Angular';
  cities: Array<string> = ['Torino','Milano','Genova'
  ];
  selezionata: string;
  temperatura: string;
  constructor(private wbs: OpenweatherService) { }
  clean() {
    this.selezionata = undefined;
  }
  refreshTemperature(itemName: string) {
    this.selezionata = itemName;
    this.wbs.getData(itemName).subscribe(
      ( x: any ) => this.temperatura = x.data[0].temp,
      err => console.error('Observer got an error: ' + err)
    );
 }
}
