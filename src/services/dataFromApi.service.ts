import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";

console.log("test1");

@Injectable()
export class DataFromApi {
  constructor(private _httpClient: HttpClient) {  }

  private _RESTCountriesAPIUrl = 'https://restcountries.com/v3.1/all';

  allCountriesData: any = [];
  toGenerateAnswerCountries : any = []
  remaingCountries: any = [];

  // Generated random country to guess
  randomCountry: any;
  
  // Random country generated to feed possible incorrect answers 
  countryToSend : any;

  setAllCountries() {
    this._httpClient.get<any>(this._RESTCountriesAPIUrl)
      .toPromise()
      .then(
        response => {
          this.allCountriesData = response;
          this.remaingCountries = response;
          this.toGenerateAnswerCountries = response;
        }
      );
  }

  resetRemainingCountries() {
    this.remaingCountries = this.allCountriesData;
  }

  generateRandomCountries() {
    this.randomCountry = this.remaingCountries[
      Math.floor(Math.random() * this.remaingCountries.length)
    ];
  }

  removeCountryFromRemaingList(country: any) {
    this.remaingCountries = this.remaingCountries.filter((e: any) => e !== country);
    this.toGenerateAnswerCountries = this.remaingCountries;
  }

  isAnswerCorrect(country: any){
    return country == this.randomCountry
  }

  generateRandomAnswerCountry(){
    this.toGenerateAnswerCountries = this.remaingCountries.filter((e: any) => e !== this.randomCountry);
    this.countryToSend = this.toGenerateAnswerCountries[Math.floor(Math.random() * this.toGenerateAnswerCountries.length)];
    this.toGenerateAnswerCountries = this.toGenerateAnswerCountries.filter((e: any) => e !== this.countryToSend)
    return this.countryToSend
  }
}