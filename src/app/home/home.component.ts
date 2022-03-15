import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  toggleCapital: boolean = false;
  toggleContinent: boolean = false;
  toggleFlag: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showCapital() {
    if (!this.toggleCapital) {
      this.toggleCapital = !this.toggleCapital;
      setTimeout(() => this.toggleCapital = !this.toggleCapital, 1500)
    }
  }

  showContinent() {
    if (!this.toggleContinent) {
      this.toggleContinent = !this.toggleContinent;
      setTimeout(() => this.toggleContinent = !this.toggleContinent, 1500)
    }
  }
  
  showFlag() {
    if (!this.toggleFlag) {
      this.toggleFlag = !this.toggleFlag;
      setTimeout(() => this.toggleFlag = !this.toggleFlag, 1500)
    }
  }
}
