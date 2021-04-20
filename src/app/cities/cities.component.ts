import { Component, OnInit } from '@angular/core';
import { OpenweatherService } from '../openweather.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})

export class CitiesComponent implements OnInit {
  cities: Array<string> = ['Torino','Milano','Genova'];
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
 addCity(newCity: string) {
    if (newCity) {
      this.cities.push(newCity);
    }
  }
  ngOnInit() {
  }
}