import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams} from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

	listForm:FormGroup;

  	constructor(private http:HttpClient,private fb: FormBuilder) { }

 	ngOnInit(): void {
  		this.createForm();
  	}
	createForm() {
	    this.listForm = this.fb.group({
	     	list_title: [null, Validators.required],
	    })
	}
	postList(){
		var params = {
			'key' : '054d67263f0716f7d49178686fc67888',
			'token' : '1a14e59b944dafc50f9ac3e1b6d78090ce3443c258df51272708e85799538b5a',
			'name' : this.listForm.get('list_title').value,
			'idBoard' : '5f194d113f3ba38ec9b5e73c',
			'pos': 'bottom'
		};

		const httpOptions = {
	          headers: new HttpHeaders({
	            'Content-Type':  'application/json'
	          })
	        };

	    //pass it if you can't modify web api
	    var v= this.http.post("https://api.trello.com/1/lists",
	      params,httpOptions
	    )
	    .subscribe(data => 
	    {alert('ok');},
	     error => 
	     {alert("Error"); console.log(error);}
	    );
	}


}
