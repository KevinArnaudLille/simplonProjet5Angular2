import { Component, OnInit } from '@angular/core';
import { DataFromApi } from 'src/services/dataFromApi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'simplonProjet5Angular2';

  constructor(private api:DataFromApi){}

  ngOnInit(): void {
    this.api.setAllCountries()

    console.log("i'm in app component");
    console.log(this.api.randomCountry);
  }
}

