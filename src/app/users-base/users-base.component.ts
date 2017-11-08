import {Component} from '@angular/core';
import {OnInit} from '@angular/core';
import {UsersArrayInfoService} from '../service/users-array-info.service';

@Component({
  selector: 'app-users-base',
  templateUrl: './users-base.component.html',
  styleUrls: ['./users-base.component.scss'],
  providers: [UsersArrayInfoService]
})
export class UsersBaseComponent implements OnInit {
  input: any;
  users: any;

  constructor(private _usersService: UsersArrayInfoService) {
  };

  ngOnInit() {
     this._usersService.getUsers().subscribe(users => this.users = users )
  }


}
