import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor() { }

  	getHttp(){
	  	const httpOptions = {
	        headers: new HttpHeaders({
	           'Content-Type':  'application/json'
	        })
		};
	}
}
