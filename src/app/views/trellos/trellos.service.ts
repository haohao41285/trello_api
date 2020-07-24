import { Injectable } from '@angular/core';
import { HttpClient,HttpParams  } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrellosService {

	private REST_API_SERVER = "https://api.trello.com/1/";

    constructor(private httpClient: HttpClient) { }

    getList(){
    	const options = { params: new HttpParams({fromString: "lists/5f194d113f3ba38ec9b5e73e/cards?key=054d67263f0716f7d49178686fc67888&token=1a14e59b944dafc50f9ac3e1b6d78090ce3443c258df51272708e85799538b5a"}) };
    	return this.httpClient.get(this.REST_API_SERVER,options);
    }
}
