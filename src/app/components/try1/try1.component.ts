import { Component, OnInit } from '@angular/core';
import { log } from 'console';
 declare const window: any;
@Component({
  selector: 'app-try1',
  templateUrl: './try1.component.html',
  styleUrls: ['./try1.component.css']
})
export class Try1Component implements OnInit {
 
  constructor() { }

  ngOnInit(): void {
  }
  vibrate() {
    if ("vibrate" in navigator) {
      navigator.vibrate(500);
      console.log("Vibration supported on this device");
    } else {
      console.log("Vibration not supported on this device");
    }    
}

vibrate2() {
  if ("vibrate" in navigator) {
    navigator.vibrate(500);
  } else if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.vibrate) {
    window.webkit.messageHandlers.vibrate.postMessage({});
  } else {
    console.log("Vibration not supported on this device");
  }
}


}
