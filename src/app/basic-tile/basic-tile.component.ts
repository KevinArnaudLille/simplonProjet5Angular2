import { Component, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-basic-tile',
  templateUrl: './basic-tile.component.html',
  styleUrls: ['./basic-tile.component.scss']
})
export class BasicTileComponent implements AfterViewInit {

  fontDOM:any;

  constructor() {
  
  }
  
  @Input() text = "";
  @Input() fontSize = "40";
  
  ngAfterViewInit() {
    console.log(`#${this.text}`);
    this.fontDOM = document.querySelector(`#${this.text}`);
    console.log(this.fontDOM);
    this.fontDOM.style.fontSize = this.fontSize + "px";    
  }
}