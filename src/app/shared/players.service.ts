import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  private players: { name: string, vibrationDurations: number[] }[] = [];
  private inGameValue: boolean = false;
  private inGamePlayerIndex: number = 0;
  addPlayer(playerName: string) {
    if (this.players.length >= 3) {
      this.players = [];
      this.players.push({ name: playerName, vibrationDurations: [] });
    }
    else{
      this.players.push({ name: playerName, vibrationDurations: [] });
    }
    
  }

  getPlayers(): { name: string, vibrationDurations: number[] }[] {
    return this.players;
  }

  addVibrationDuration(playerIndex: number, duration: number) {
    console.log(this.players[playerIndex].vibrationDurations, "before");
    console.log("addVibrationDuration");
    console.log(playerIndex);
    console.log(duration);
    this.players[playerIndex].vibrationDurations.push(duration);
  }

  getVibrationDurations(playerIndex: number): number[] {
    return this.players[playerIndex].vibrationDurations;
  }
  inGame(){
    return this.inGameValue;
  };
  startAGame(){
    this.inGameValue = true; 
    this.inGamePlayerIndex = 1;   
  }
  endAGame(){
    this.inGameValue = false;
    this.inGamePlayerIndex = 0;
    
  }
  getInGamePlayerIndex(){
    let currentPlayer = this.inGamePlayerIndex;
    this.inGamePlayerIndex++;
    return currentPlayer;

  }
  
}