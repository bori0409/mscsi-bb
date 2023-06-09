import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import {FormControl, FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
loader = false;
  constructor( public authService: AuthService) { }

  ngOnInit(): void {
  }
  testForm = new FormGroup({
    testValue: new FormControl(''),
     email: new FormControl('', [Validators.required, Validators.email]),
  });
  
  LogIn(userEmail: string, userPassword: string) {
    this.authService.SignIn(userEmail,userPassword)
    this.loader=true;
    
   
      
    }
  
  }
