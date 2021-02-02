import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
//import { NotFoundError } from './../common/not-found-error';
//import { AppError } from './app-error';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
//import { Response} from '@angular/http';



@Injectable({
  providedIn: 'root'
})

export class DataService {
  private url = 'https://api.adviceslip.com/advice';
  constructor(private http: Http) { 

  }
  getPost() {
   return this.http.get(this.url);
 
   }
 
}
