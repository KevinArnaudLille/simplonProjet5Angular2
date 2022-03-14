import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataFromApi } from 'src/services/dataFromApi.service';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { ScoreButtonComponent } from './score-button/score-button.component';
import { TestAPIComponent } from './test-api/test-api.component';
import { ReturnBtnComponent } from './return-btn/return-btn.component';
import { LogoComponent } from './logo/logo.component';
import { FlagContainerComponent } from './flag-container/flag-container.component';

@NgModule({
  declarations: [
    AppComponent,
    ScoreButtonComponent,
    TestAPIComponent,
    ReturnBtnComponent,
    LogoComponent,
    FlagContainerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DataFromApi],
  bootstrap: [AppComponent]
})
export class AppModule { }
