import { Component, OnInit } from '@angular/core';
import { DataFromApi } from 'src/services/dataFromApi.service';

@Component({
  selector: 'app-template-capital',
  templateUrl: './template-capital.component.html',
  styleUrls: ['./template-capital.component.scss'],
})
export class TemplateCapitalComponent implements OnInit {
  hasStartBtnBeenClicked: boolean = false;

  correctAnswers: any = 0;
  totalAnswers: any = 0;

  randomCountry: any;
  allAnswerCountries: any = [];
  titleCountry: any;
  constructor(private api: DataFromApi) {}

  ngOnInit(): void {
    this.api.setAllCountries();
  }

  startBtnClicked() {
    this.generateQuestion();
    this.hasStartBtnBeenClicked = !this.hasStartBtnBeenClicked;
  }

  generateQuestion() {
    this.api.generateRandomCountries();
    this.randomCountry = this.api.randomCountry.name.common;
    this.allAnswerCountries = this.api.generateAllPossibleAnswersForCapital();
  }

  checkAnswer(country: any) {
    if (this.api.isAnswerCorrect(country)) {
      this.correctAnswers++;
    }
    this.totalAnswers++;
    this.generateQuestion();
  }
}
