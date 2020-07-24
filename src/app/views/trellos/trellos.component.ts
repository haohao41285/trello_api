import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams} from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TrellosService } from  './trellos.service';

@Component({
  selector: 'app-trellos',
  templateUrl: './trellos.component.html',
  styleUrls: ['./trellos.component.css']
})
export class TrellosComponent implements OnInit {
  basicForm: FormGroup;

	Category:Array<any> = [
		{value:1,title:'Cần Làm'},
		{value:2, title:'Đang làm'},
		{value:3, title:'Đã Xong'}
	];
	list:any;

  	constructor(private http:HttpClient,private fb: FormBuilder, private TrelloService:TrellosService) { }

	ngOnInit(): void {
  		this.createForm();
  		this.getList();
  	}
	createForm() {
	    this.basicForm = this.fb.group({
	     	title: [null, Validators.required],
	    	category: ['1', Validators.required],
	    })
	}

  	dateChange(event) {
  	  	console.log(event);
  	 	 this.basicForm.get('userDate').setValue(event.target.value)
 	}

  	submit() {
    	console.log(this.basicForm.value);
  	}

  	getList(){
	    var v = this.http.get("https://api.trello.com/1/lists/5f194d113f3ba38ec9b5e73e/cards?key=054d67263f0716f7d49178686fc67888&token=1a14e59b944dafc50f9ac3e1b6d78090ce3443c258df51272708e85799538b5a",
	    )
	    .subscribe(data => 
	    {
	    	console.log(data);
	    	this.list = data;
	    },
	     error => 
	     {alert("Error"); console.log(error);}
	    );
  	}

	checkLogIn(event){

	    var params={
	     	"name": this.basicForm.get('title').value,
		    "pos": "bottom",
		    "key": "054d67263f0716f7d49178686fc67888",
		    "token": "1a14e59b944dafc50f9ac3e1b6d78090ce3443c258df51272708e85799538b5a",
		    "idList": "5f194d113f3ba38ec9b5e73e"
	    }

	    const httpOptions = {
	          headers: new HttpHeaders({
	            'Content-Type':  'application/json'
	          })
	        };

	    var v= this.http.post("https://api.trello.com/1/cards",
	      params,httpOptions
	    )
	    .subscribe(data => 
	    {alert('ok');},
	     error => 
	     {alert("Error"); console.log(error);}
	    );

	}

}
