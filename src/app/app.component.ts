import { Component, OnInit } from '@angular/core';
import { DataFromApi } from 'src/services/dataFromApi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'simplonProjet5Angular2';

  constructor(private api:DataFromApi){}

  ngOnInit(): void {
    this.api.setAllCountries()
  }
}

  // de nouveau test pour le bouton de score //
//   if(option){
//     this.correctAnswers++;
//   }else{
//     this.incorrectAnswers++
//   }
// }
// Cela pourra être utilise si o'on fait une page résultats finaux//