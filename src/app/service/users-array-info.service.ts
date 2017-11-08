import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersArrayInfoService {
  users = [{name: `WFM 1`}, {name: `WFM 2`}, {name: `WFM 3`}, {name: `WFM 4`}, {name: `WFM 5`}];

  constructor(private _http: Http) {
  }

  getUsers() {
    return this._http.get('https://randomuser.me/api/?inc=gender,name,picture,loction&results=8&nat=gb')
      .map(response => response.json()).map(response => response.results).map(users => {
        return users.map(u => {
          return {name: `${u.name.first} ${u.name.last}`,
          gender: ` ${u.gender}`,
          image: u.picture.large}
        })
      });
  }

}
