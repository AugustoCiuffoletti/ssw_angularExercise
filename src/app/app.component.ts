import { Component } from '@angular/core';
import { OpenweatherService } from './openweather.service';

class City {
  nome: string;
  temperatura: string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Esercizio Angular';
  cities: Array<City> = [
    {
      nome: 'Torino',
      temperatura: '14'
    }, {
      nome: 'Milano',
      temperatura: '15'
    }, {
      nome: 'Genova',
      temperatura: '18'
    }
  ];
  selezionata: City;
  constructor(private wbs: OpenweatherService) { }
  clean() {
    this.selezionata=undefined;
  }
  refreshTemperature(itemName: string) {
    var trovato: Array<City> = this.cities.filter(
      el => ( el.nome === itemName )
    );
    this.selezionata = trovato[0];
    this.wbs.getData(this.selezionata.nome).subscribe(
      ( x: any ) => this.selezionata.temperatura = x.data[0].temp,
      err => console.error('Observer got an error: ' + err)
    );
 }
}
