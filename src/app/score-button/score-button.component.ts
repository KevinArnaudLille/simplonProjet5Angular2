import { Component, OnInit, Input } from '@angular/core';
import { DataFromApi } from 'src/services/dataFromApi.service';

@Component({
  selector: 'app-score-button',
  templateUrl: './score-button.component.html',
  styleUrls: ['./score-button.component.scss']
})
export class ScoreButtonComponent implements OnInit {

  @Input () countrySelected: any;
  correctAnswers = 0;
  totalAnswers = 0;

  constructor(private api: DataFromApi) { }

  ngOnInit(): void {
  }

  score() {
    if (this.api.isAnswerCorrect(this.countrySelected) === true) {
      this.correctAnswers++;
    }
    this.totalAnswers++;
  }

}

// de nouveau test pour le bouton de score //
//
// 
// Cela pourra être utilise si l'on fait une page résultats finaux//