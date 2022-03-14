import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReturnBtnComponent } from './return-btn/return-btn.component';
import { LogoComponent } from './logo/logo.component';
import { FlagContainerComponent } from './flag-container/flag-container.component';

@NgModule({
  declarations: [
    AppComponent,
    ReturnBtnComponent,
    LogoComponent,
    FlagContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
