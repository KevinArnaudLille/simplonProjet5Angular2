import { Component, AfterViewInit } from '@angular/core';
import { DataFromApi } from 'src/services/dataFromApi.service';

@Component({
  selector: 'app-title-country',
  templateUrl: './title-country.component.html',
  styleUrls: ['./title-country.component.scss']
})
export class TitleCountryComponent implements AfterViewInit {

  titleCountry: any;

  constructor(private api: DataFromApi) {
  }
  
  //La ligne suivante est d'un chiant, il faut pouvoir cibler le bon pays et la bonne info... 
  //J'ai testé pas mal d'énonciation différentes, c'est la seule qui a été accepté par angular... 
  
  ngAfterViewInit(): void {
    
      this.api.generateRandomCountries();
      console.log("yo");
      console.log(this.api.randomCountry);
    
      this.titleCountry = this.api.randomCountry;
      console.log(this.titleCountry);
    
  }
  
}
