import { Component, OnInit } from '@angular/core';
import { DataFromApi } from 'src/services/dataFromApi.service';
export class flag {
  constructor(public flag: any) {}
}
@Component({
  selector: 'app-flag-container',
  templateUrl: './flag-container.component.html',
  styleUrls: ['./flag-container.component.scss'],
})
export class FlagContainerComponent implements OnInit {
  constructor(private api: DataFromApi) {}

  ngOnInit(): void {}
}
