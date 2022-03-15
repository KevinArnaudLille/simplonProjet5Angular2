import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  fontDOM: any;

  @Input() text = "";
  @Input() fontSize = "10";
  constructor() { }

  ngOnInit(): void {
    this.fontDOM = document.querySelector("#header-container p")
    this.fontDOM.style.fontSize = this.fontSize + "px";
  }

}
