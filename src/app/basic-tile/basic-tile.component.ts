import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-basic-tile',
  templateUrl: './basic-tile.component.html',
  styleUrls: ['./basic-tile.component.scss']
})
export class BasicTileComponent implements OnInit {

  fontDOM:any;

  constructor() { }

  @Input() text = "";
  @Input() fontSize = "40";

  ngOnInit(): void {
    this.fontDOM = document.querySelector("#main-container p")
    this.fontDOM.style.fontSize = this.fontSize + "px";
  }
}