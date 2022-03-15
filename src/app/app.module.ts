import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataFromApi } from 'src/services/dataFromApi.service';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
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
import { RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
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
    TitleCountryComponent,
    NavComponent,
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
