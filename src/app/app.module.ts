import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WeatherInfoMainComponent } from './Components/weather-info-main/weather-info-main.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherInfoMainComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
