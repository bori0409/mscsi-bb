import { Component, OnInit } from '@angular/core';
	import {FormControl, FormGroup} from '@angular/forms';
import { PlayersService } from 'src/app/shared/players.service';
import { Router } from '@angular/router';
import { delay } from 'cypress/types/bluebird';
import { set } from 'cypress/types/lodash';

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.css']
})
export class StartScreenComponent implements OnInit {
loader = false;
link: string = "/dashboard/(dashboardRouter:game)";

  constructor(private playersService: PlayersService, private router: Router) { }

  ngOnInit(): void {
  }
  readonly testForm = new FormGroup({
    testValue: new FormControl(''),
    testValue2: new FormControl(''),
    testValue3: new FormControl(''),
    
});

onStartBtnClick() {
this.loader = true;
  this.playersService.addPlayer(this.testForm.value.testValue);
  this.playersService.addPlayer(this.testForm.value.testValue2);
  this.playersService.addPlayer(this.testForm.value.testValue3);
setTimeout(() => {  this.router.navigateByUrl(this.link);}, 200);
  console.log(this.playersService.getPlayers());

}
}
