import { Component, Input } from '@angular/core';
import { DataFromApi } from 'src/services/dataFromApi.service';

@Component({
  selector: 'app-title-country',
  templateUrl: './title-country.component.html',
  styleUrls: ['./title-country.component.scss']
})
export class TitleCountryComponent {

  @Input() titleCountry="";

  constructor(private api: DataFromApi) {
  }
  
  //La ligne suivante est d'un chiant, il faut pouvoir cibler le bon pays et la bonne info... 
  //J'ai testé pas mal d'énonciation différentes, c'est la seule qui a été accepté par angular... 
}
