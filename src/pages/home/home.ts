import { Component } from '@angular/core';
import {PeopleService} from '../../providers/people-service';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  providers: [PeopleService],
  templateUrl: 'home.html'
})


export class HomePage {
  public people: any;

  constructor( public navCtrl: NavController, public peopleService: PeopleService){
    this.loadPeople();
  }

  loadPeople(){
    this.peopleService.load()
    .then(data => {
      this.people = data;
    });
  }
}
