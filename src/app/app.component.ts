import { Component } from '@angular/core';

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
  clean() {
    this.selezionata=undefined;
  }
  seleziona(itemName: string) {
    var trovato: Array<City> = this.cities.filter(
      el => ( el.nome === itemName )
    );
    this.selezionata = trovato[0];
  }
}
