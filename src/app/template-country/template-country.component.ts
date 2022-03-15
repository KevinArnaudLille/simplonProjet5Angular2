import { Component, OnInit } from '@angular/core';
import { DataFromApi } from 'src/services/dataFromApi.service';

@Component({
  selector: 'app-template-country',
  templateUrl: './template-country.component.html',
  styleUrls: ['./template-country.component.scss']
})
export class TemplateCountryComponent implements OnInit {

  hasStartBtnBeenClicked:boolean=false;
  isDownloadDone:boolean = this.api.isDownloadDone;

  correctAnswers:any = 0;
  totalAnswers:any = 0;

  randomCountry:any;

  allAnswerCountries:any = [];

  constructor(private api:DataFromApi) { }

  ngOnInit(): void {
    this.api.setAllCountries()
  }

  startBtnClicked(){
    this.generateQuestion();
    this.hasStartBtnBeenClicked = !this.hasStartBtnBeenClicked;
  }
  
  generateQuestion(){
    this.api.generateRandomCountries();
    this.randomCountry = this.api.randomCountry.name.common;
    this.allAnswerCountries = this.api.generateAllPossibleAnswersForContinent();
    // this.isDownloadDone = this.api.isDownloadDone;
  }

  checkAnswer(country:any){
    // this.api.isDownloadDone = !this.api.isDownloadDone;
    // this.isDownloadDone = this.api.isDownloadDone;
    if (this.api.isAnswerCorrect(country)) {
      this.correctAnswers++;
    }
    this.totalAnswers++;
    this.generateQuestion();
  }
}
