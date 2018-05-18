import { Component, OnInit,AfterViewInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-r3',
  templateUrl: './r3.component.html',
  styleUrls: ['./r3.component.css']
})
export class R3Component  {
	id:number;
	name:string;
  constructor(	 private activatedRoute: ActivatedRoute,private http:HttpClient) {
  		 console.log(location.pathname)
  	
  	 }

  ngOnInit(){
  		this.activatedRoute.queryParams.subscribe(queryParams => {  
  	        this.id = queryParams.id;  
  	      	this.name = queryParams.name;
  	    });
  	    console.log(this.activatedRoute)
		this.activatedRoute.params.subscribe(params => {  
  	        console.log(params);
  	    });
 	
  
  }
  ngAfterViewInit () {

  	
  }
  boom():void{
    console.log('http');
   console.log(this.http.get('https://www.smartisan.com/product/promotions?with_num=true'));
  }

}
