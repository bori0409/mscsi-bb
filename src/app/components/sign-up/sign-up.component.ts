import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  loader = false;
  constructor( public authService : AuthService) { }

  ngOnInit(): void {
  }
  testForm = new FormGroup({
    testValue: new FormControl(''),
     email: new FormControl('', [Validators.required, Validators.email]),
  });

  signUp(userEmail: string, userPassword: string) {
    this.authService.SignUp(userEmail,userPassword)
    this.loader=true;
    
   
      
    }
}
