import { HttpClient } from "@angular/common/http";
import { Injectable} from "@angular/core";

console.log("test1");

@Injectable()
export class DataFromApi {
  constructor(private _httpClient: HttpClient) {  }

  private _RESTCountriesAPIUrl = 'https://restcountries.com/v3.1/all';

  allCountriesData: any = [];
  toGenerateAnswerCountries : any = []
  remaingCountries: any = [];
  allPossibleAnswer : any = [];

  firstGeneratedCountry:any;
  secondGeneratedCountry:any;
  isDownloadDone:boolean=false;

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

  shuffleListData(a:any) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  generateAllPossibleAnswers(){
    this.allPossibleAnswer = [this.randomCountry,this.generateRandomAnswerCountry(),this.generateRandomAnswerCountry()]
    this.isDownloadDone = !this.isDownloadDone;
    return this.shuffleListData(this.allPossibleAnswer)
  }
  
  generateAllPossibleAnswersForContinent(){
    do {
      this.firstGeneratedCountry = this.generateRandomAnswerCountry();
      this.secondGeneratedCountry = this.generateRandomAnswerCountry();
    } while ((this.firstGeneratedCountry.continents[0] == this.secondGeneratedCountry.continents[0]) || (this.firstGeneratedCountry.continents[0] == this.randomCountry.continents[0]) || (this.secondGeneratedCountry.continents[0] == this.randomCountry.continents[0]));
    
    this.allPossibleAnswer = [this.randomCountry,this.firstGeneratedCountry,this.secondGeneratedCountry]
    
    this.isDownloadDone = !this.isDownloadDone;
    return this.shuffleListData(this.allPossibleAnswer)
  }
  
}