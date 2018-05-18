import { Component } from '@angular/core';
import { User } from './classes/User';
import { UserService } from './service/user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
 	users: User[];

 	constructor(private userService: UserService) {
 		this.users = userService.getUsers();
 	}
}
