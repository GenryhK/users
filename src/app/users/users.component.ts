import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent{
  isMarck: any = false;
  @Input() user: any;
  click(){this.isMarck = !this.isMarck; console.log(this.isMarck)}





}
