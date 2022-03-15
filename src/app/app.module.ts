import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataFromApi } from 'src/services/dataFromApi.service';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ScoreButtonComponent } from './score-button/score-button.component';
import { TestAPIComponent } from './test-api/test-api.component';
import { ReturnBtnComponent } from './return-btn/return-btn.component';
import { LogoComponent } from './logo/logo.component';
import { FlagContainerComponent } from './flag-container/flag-container.component';
import { HomeComponent } from './home/home.component';
import { TemplateContinentComponent } from './template-continent/template-continent.component';
import { TemplateCountryComponent } from './template-country/template-country.component';
import { TemplateCapitalComponent } from './template-capital/template-capital.component';
import { BasicTileComponent } from './basic-tile/basic-tile.component';
import { TitleCountryComponent } from './title-country/title-country.component';
<<<<<<< HEAD

import { RouterModule } from '@angular/router';
=======
import { RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';

>>>>>>> c41d4770da7e39404167ce40e7ec556744193a6d

@NgModule({
  declarations: [
    AppComponent,
    ScoreButtonComponent,
    TestAPIComponent,
    ReturnBtnComponent,
    LogoComponent,
    FlagContainerComponent,
    HomeComponent,
    TemplateContinentComponent,
    TemplateCountryComponent,
    TemplateCapitalComponent,
    BasicTileComponent,
<<<<<<< HEAD
<<<<<<< HEAD
    TitleCountryComponent,
=======
    NavComponent,
    TitleCountryComponent
>>>>>>> c41d4770da7e39404167ce40e7ec556744193a6d
=======
    TitleCountryComponent,
    NavComponent,
>>>>>>> 5e8d2aac0beee2575146c0d730be341edb1ff15d
  ],
  
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'template-continent', component: TemplateContinentComponent },
      { path: '', component: HomeComponent },
      { path: 'template-country', component: TemplateCountryComponent },
      { path: 'template-capital', component: TemplateCapitalComponent },
    ]),
  ],
  providers: [DataFromApi],
  bootstrap: [AppComponent],
})
export class AppModule {}
