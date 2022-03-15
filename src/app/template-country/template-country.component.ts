import { Component, OnInit } from '@angular/core';
import { DataFromApi } from 'src/services/dataFromApi.service';

@Component({
  selector: 'app-template-country',
  templateUrl: './template-country.component.html',
  styleUrls: ['./template-country.component.scss'],
})
export class TemplateCountryComponent implements OnInit {
  constructor(private api: DataFromApi) {}

  ngOnInit(): void {}
  testbtn(): void {
    console.log('test start here');

    this.api.generateRandomCountries();
    console.log(this.api.randomCountry);
    this.api.removeCountryFromRemaingList(this.api.randomCountry);
    console.log(this.api.remaingCountries);
    console.log(this.api.isAnswerCorrect(this.api.randomCountry));
    console.log(
      this.api.isAnswerCorrect(this.api.generateRandomAnswerCountry())
    );
    console.log(this.api.generateRandomAnswerCountry());
    console.log(this.api.generateRandomAnswerCountry());
    console.log(this.api.generateRandomAnswerCountry());
    console.log(this.api.generateRandomAnswerCountry());
    console.log(this.api.generateRandomAnswerCountry());
    console.log(this.api.generateRandomAnswerCountry());
  }

  textToShow = 'Coucou';
}
