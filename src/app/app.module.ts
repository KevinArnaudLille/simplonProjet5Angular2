import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataFromApi } from 'src/services/dataFromApi.service';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { TestAPIComponent } from './test-api/test-api.component';

@NgModule({
  declarations: [
    AppComponent,
    TestAPIComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DataFromApi],
  bootstrap: [AppComponent]
})
export class AppModule { }
