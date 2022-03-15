import {Component, OnInit } from '@angular/core';
import { DataFromApi } from 'src/services/dataFromApi.service';


@Component({
  selector: 'app-template-continent',
  templateUrl: './template-continent.component.html',
  styleUrls: ['./template-continent.component.scss']
})
export class TemplateContinentComponent implements OnInit {

  hasStartBtnBeenClicked:boolean=false;
  
  randomCountry:any;
  allAnswerCountries:any = [];
  correctAnswers:any = 0;
  totalAnswers:any = 0;
  isDownloadDone:boolean = this.api.isDownloadDone;

  startBtnClicked(){
    this.api.setAllCountries()
    this.generateQuestion();
    this.hasStartBtnBeenClicked = !this.hasStartBtnBeenClicked;
  }

  checkAnswer(country:any){
    this.api.isDownloadDone = !this.api.isDownloadDone;
    this.isDownloadDone = this.api.isDownloadDone;
    console.log("couille");
    console.log(this.api.isDownloadDone);
    
    if (this.api.isAnswerCorrect(country) === true) {
      this.correctAnswers++;
    }
    this.totalAnswers++;
    this.generateQuestion();
  }

  generateQuestion(){
    this.api.generateRandomCountries();
    this.randomCountry = this.api.randomCountry.name.common;
    this.allAnswerCountries = this.api.generateAllPossibleAnswersForContinent();
    this.isDownloadDone = this.api.isDownloadDone;
  }

  constructor(private api:DataFromApi) { }

  ngOnInit(): void {
  }

}
