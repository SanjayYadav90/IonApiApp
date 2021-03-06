import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PeopleService {
  data: any;
  
  constructor(public http: Http) {
    console.log('Hello PeopleService Provider.');
  }

  load() {
  if (this.data) {
    return Promise.resolve(this.data);
  }

  return new Promise(resolve => {
    this.http.get('https://randomuser.me/api/?results=10')
      .map(res => res.json())
      .subscribe(data => {
        this.data = data.results;
        resolve(this.data);
      });
  });
};

}
