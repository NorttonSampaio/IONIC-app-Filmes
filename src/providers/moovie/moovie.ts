import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MoovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MoovieProvider {
  private baseApiPath = "https://api.themoviedb.org/3";

  constructor(public http: HttpClient) {
    console.log('Hello MoovieProvider Provider');
  }

  getLatestMovies(){
    return this.http.get(this.baseApiPath + "/movie/latest?api_key=" + this.getApiKey() + this.getLanguage());
  }

  getPopularMovies(){
    return this.http.get(this.baseApiPath + "/movie/popular?api_key=" + this.getApiKey()+ this.getLanguage());
  }

  getApiKey():string{
    return "36c71abe4788cc43d2a855bd1353f8bc";
  }

  getLanguage():string{
    return "&language=pt-BR";
  }
}
