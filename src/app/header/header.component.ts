import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  fontDOM: any;

  @Input() text = "";
  @Input() fontSize = "20";
  title = "Le quizz sur les pays du monde! ";
  title1 = "Choississez votre quizz et réalissez le meilleur score en 20 questions.";
  constructor() { }

  ngOnInit(): void {
    this.fontDOM = document.querySelector("#header-container p")
    this.fontDOM.style.fontSize = this.fontSize + "px";
  }

}
