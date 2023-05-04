import { Component, OnInit } from '@angular/core';
import { log } from 'console';
import { VibrationService } from 'src/app/shared/vibration.service';

 declare const window: any;
@Component({
  selector: 'app-try1',
  templateUrl: './try1.component.html',
  styleUrls: ['./try1.component.css']
})
export class Try1Component implements OnInit {
 howManyTimes = 0;
 mess = "hello";
  constructor(private vibrationService: VibrationService) { }

  ngOnInit(): void {
  }
  
  vibrate() {
    if ("vibrate" in navigator) {
      navigator.vibrate(500);
      console.log("Vibration supported on this device");
      this.howManyTimes++;
      this.mess = "Vibration supported on this device, number 1";
    } else {
      console.log("Vibration not supported on this device");
      this.mess = "Vibration NOT supported on this device, number 1";
    }    
}

vibrate2() {
  if ("vibrate" in navigator) {
    navigator.vibrate(500);
  } else if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.vibrate) {
    window.webkit.messageHandlers.vibrate.postMessage({});
    this.howManyTimes++;
    this.mess = "Vibration supported on this device, number 2";
  } else {
    console.log("Vibration not supported on this device");
    this.mess = "Vibration NOT supported on this device, number 1";
  }
}
vibrate3() {
  this.vibrationService.vibrate(1000); 
  this.howManyTimes++;
  this.mess = "Vibration supported on this device, number 3";

  
}
vibrate4() {
  if (window.navigator && window.navigator.vibrate) {
    navigator.vibrate(1000);
    // Vibration supported
    this.mess = "Vibration NOT supported on this device, number 4";
 } else {
    // Vibration not supported
    this.mess = "Vibration NOT supported on this device, number 4";
 }
}

}
