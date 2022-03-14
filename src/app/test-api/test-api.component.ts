import { Component, OnInit } from '@angular/core';
import { DataFromApi } from 'src/services/dataFromApi.service';

@Component({
  selector: 'app-test-api',
  templateUrl: './test-api.component.html',
  styleUrls: ['./test-api.component.scss']
})
export class TestAPIComponent implements OnInit {

  constructor(private api:DataFromApi) { }

  ngOnInit(): void {}

  testbtn() : void {
    console.log("test start here");
    
    this.api.generateRandomCountries();
    console.log(this.api.randomCountry);
    this.api.removeCountryFromRemaingList(this.api.randomCountry);
    console.log(this.api.remaingCountries);
    console.log(this.api.isAnswerCorrect(this.api.randomCountry));
    console.log(this.api.isAnswerCorrect(this.api.generateRandomAnswerCountry()));
    console.log(this.api.generateRandomAnswerCountry());
    console.log(this.api.generateRandomAnswerCountry());
    console.log(this.api.generateRandomAnswerCountry());
    console.log(this.api.generateRandomAnswerCountry());
    console.log(this.api.generateRandomAnswerCountry());
    console.log(this.api.generateRandomAnswerCountry());
  }
  

}
