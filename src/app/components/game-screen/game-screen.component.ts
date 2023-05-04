import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../../shared/players.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-screen',
  templateUrl: './game-screen.component.html',
  styleUrls: ['./game-screen.component.css']
})
export class GameScreenComponent implements OnInit {

  constructor(private playersService: PlayersService, private routme: Router) { }
  link: string = "/dashboard/(dashboardRouter:end-game)";
  pressStartTime: number;
  vibrationPattern: number[] = [];
  vibrationTimeout: any;
  playerIndex: number;
  isLastPlayer: boolean = false;
  nextPlayersTurn: boolean = false;
  isGameOver: boolean = false;
  inGame: boolean = false;
  isVibrationButtonDisabled: boolean = false;
  players:any[] = [];
  ngOnInit(): void {
    this.players = this.playersService.getPlayers();
    this.inGame = this.playersService.inGame();
    if(this.inGame){
     this.playerIndex = this.playersService.getInGamePlayerIndex();
     console.log("player index is: " + this.playerIndex);
     if(this.playerIndex == 2) {
        this.isLastPlayer = true;       
     }
    }
    else {
      this.playersService.startAGame();
      this.playerIndex = 0;
    }
   
  }
  onButtonPressStart(): void {
    // Record the start time of the button press
    this.pressStartTime = Date.now();

    // Vibrate the device immediately using the Web Vibration API
    navigator.vibrate(100);

    // Start a timer to continue vibrating until the button is released
    this.vibrationTimeout = setTimeout(() => {
      this.onButtonPressEnd();
    }, 10000);
  }
  onButtonPressEnd(): void {
    // Stop the vibration timeout and clear the timeout
    clearTimeout(this.vibrationTimeout);

    // Calculate the duration of the button press and add it to the vibration pattern array
    const pressDuration = Date.now() - this.pressStartTime;
    this.vibrationPattern.push(pressDuration);

    // Stop the vibration using the Web Vibration API
    navigator.vibrate(0);
    if(this.vibrationPattern.length >= 6) { 
      console.log("6 now should shtop");
      for(let i = 0; i < 6; i++){
        this.playersService.addVibrationDuration(this.playerIndex,this.vibrationPattern[i]);
        console.log(this.vibrationPattern[i]);
      }
      this.vibrationPattern = [];
      if(this.playerIndex == 2){
        this.playersService.endAGame();
        this.isGameOver = true;
        this.isVibrationButtonDisabled = true;
        this.nextPlayersTurn = false;
      }
      else {
        this.nextPlayersTurn = true;
        this.isVibrationButtonDisabled = true;
      }
      


    }
    // Log the updated vibration pattern array
    console.log(this.vibrationPattern);
  }
  nextLevel() {
   //
   this.routme.navigateByUrl('/dashboard', { skipLocationChange: true }).then(() => {
    this.routme.navigate(['/dashboard', { outlets: { dashboardRouter: ['game'] } }]);
  });
  }
  endGame() {
    this.routme.navigateByUrl(this.link);
  }

}
