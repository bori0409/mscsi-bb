import { Component, OnInit } from '@angular/core';
import { PlayersService } from 'src/app/shared/players.service';

@Component({
  selector: 'app-end-screen',
  templateUrl: './end-screen.component.html',
  styleUrls: ['./end-screen.component.css']
})
export class EndScreenComponent implements OnInit {

  constructor(private playerService: PlayersService) { }
firstPlayerPatern:any;
lastPlayerPatern:any;
players;
simmilarityScore;
isPlaying = false;
  ngOnInit(): void {
    this.players =this.playerService.getPlayers();
    this.firstPlayerPatern= this.playerService.getVibrationDurations(0);
    this.lastPlayerPatern= this.playerService.getVibrationDurations(2);
    console.log(this.firstPlayerPatern);  
    console.log(this.lastPlayerPatern);
    if(this.firstPlayerPatern.length > 0 || this.lastPlayerPatern.length > 0){
     this.simmilarityScore= this.calculateSimilarity(this.firstPlayerPatern, this.lastPlayerPatern);
    console.log(this.simmilarityScore, "simmilarityScoreggggggggggggggggggggggggggggggggg");
    }
  }

  calculateSimilarity(a: number[], c: number[]): number {
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
      sum += Math.pow(a[i] - c[i], 2);
    }
    const distance = Math.sqrt(sum);
    const maxDistance = Math.sqrt(Math.pow(100, 2) * a.length);
    const similarityScore = Math.round( (1 - distance / maxDistance) * 100);
    var moreOptimisticSimilarityScore =similarityScore + 20;
    console.log("moreOptimisticSimilarityScore", moreOptimisticSimilarityScore);
    if (moreOptimisticSimilarityScore > 100) {
      console.log("moreOptimisticSimilarityScore > 100", moreOptimisticSimilarityScore);
      return 100;
    }
  
    return moreOptimisticSimilarityScore;
  }

  playVibrationPattern(pattern: number[]) {
    this.isPlaying = true;
   
    var duration;
    const pauseDuration = 500; // set the pause duration in milliseconds
  
    let totalDuration = 0;
    for (let i = 0; i < pattern.length; i++) {
      totalDuration += pattern[i];
      if (i < pattern.length - 1) {
        totalDuration += pauseDuration;
      }
    }
  
    let elapsedDuration = 0;
    for (let i = 0; i < pattern.length; i++) {
      setTimeout(() => {
        navigator.vibrate(duration);
        elapsedDuration += pattern[i];
        if (i < pattern.length - 1) {
          setTimeout(() => {
            navigator.vibrate(0);
          }, elapsedDuration + pauseDuration);
          elapsedDuration += pauseDuration;
        }
      }, elapsedDuration);
    }
  
    setTimeout(() => {
      this.isPlaying = false;
    }, totalDuration);
  }
}
