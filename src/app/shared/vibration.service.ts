import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VibrationService {vibrate(duration: number) {
  if ('vibrate' in navigator) {
    navigator.vibrate(duration);
  }
}
}