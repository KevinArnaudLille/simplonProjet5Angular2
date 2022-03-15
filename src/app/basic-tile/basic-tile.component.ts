import { Component, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-basic-tile',
  templateUrl: './basic-tile.component.html',
  styleUrls: ['./basic-tile.component.scss']
})
export class BasicTileComponent implements AfterViewInit {

  fontDOM: any;

  constructor() {

  }

  @Input() text = "Le Quizz sur les pays du monde ! Choisissez votre quizz et réalisez le meilleur score en 20 questions.";
  @Input() fontSize = "60";

  ngAfterViewInit() {
    // this.fontDOM = document.querySelector(`#${this.text}`);
    // this.fontDOM.style.fontSize = this.fontSize + "px";    
  }
}