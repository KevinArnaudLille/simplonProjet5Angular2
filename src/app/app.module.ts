import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataFromApi } from 'src/services/dataFromApi.service';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { HeaderComponent } from './header/header.component';
=======
import { ScoreButtonComponent } from './score-button/score-button.component';
import { TestAPIComponent } from './test-api/test-api.component';
import { ReturnBtnComponent } from './return-btn/return-btn.component';
import { LogoComponent } from './logo/logo.component';
import { FlagContainerComponent } from './flag-container/flag-container.component';
import { HomeComponent } from './home/home.component';
import { TemlateFlagComponent } from './temlate-flag/temlate-flag.component';
import { TemplateContinentComponent } from './template-continent/template-continent.component';
import { TemplateCountryComponent } from './template-country/template-country.component';
import { TemplateCapitalComponent } from './template-capital/template-capital.component';
import { BasicTileComponent } from './basic-tile/basic-tile.component';

>>>>>>> 62f213287467e676c5d29bc1d7dc6533ea10cfd4

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    HeaderComponent
=======
    ScoreButtonComponent,
    TestAPIComponent,
    ReturnBtnComponent,
    LogoComponent,
    FlagContainerComponent,
    HomeComponent,
    TemlateFlagComponent,
    TemplateContinentComponent,
    TemplateCountryComponent,
    TemplateCapitalComponent,
    BasicTileComponent

>>>>>>> 62f213287467e676c5d29bc1d7dc6533ea10cfd4
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DataFromApi],
  bootstrap: [AppComponent]
})
export class AppModule { }
