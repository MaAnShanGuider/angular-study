import { Component, OnInit,AfterViewInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-r2',
  templateUrl: './r2.component.html',
  styleUrls: ['./r2.component.css']
})
export class R2Component  {
	id:number;
	name:string;
  constructor(	 private activatedRoute: ActivatedRoute) {
  		 
  	
  	 }

  ngOnInit(){
  	console.log('aa');
  	/*	this.activatedRoute.queryParams.subscribe(queryParams => {  
  	        this.id = queryParams.id;  
  	      	this.name = queryParams.name;
  	    });*/
  	    console.log(this.activatedRoute.snapshot)
 	
  
  }
  ngAfterViewInit () {
  	console.log('bbb');

  	
  }

}
