import { Component, OnInit, } from '@angular/core';
import { DataFromApi } from 'src/services/dataFromApi.service';

@Component({
  selector: 'app-title-country',
  templateUrl: './title-country.component.html',
  styleUrls: ['./title-country.component.scss']
})
export class TitleCountryComponent implements OnInit {

  constructor(private api: DataFromApi) { }
  titleCountry = this.api.generateRandomAnswerCountry;
  ngOnInit(): void {
  }

}
