import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-r1',
  templateUrl: './r1.component.html',
  styleUrls: ['./r1.component.css']
})
export class R1Component implements OnInit {

  constructor(private route : ActivatedRoute) { }
  username:string = 'jack';
  password:string = '11111';
  ngOnInit() {
  	console.log(this.route);
  }

}
