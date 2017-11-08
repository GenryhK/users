import {Pipe} from '@angular/core';
import {PipeTransform} from '@angular/core';

@Pipe({
  name: 'search'
})

export class SearchPipe implements PipeTransform{
  transform(users, input) {return users.filter(user => {return user.name.includes(input)})}
}
