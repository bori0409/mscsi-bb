import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import {tuiAvatarOptionsProvider} from '@taiga-ui/kit'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']

})
export class HeaderComponent implements OnInit {
userNickname = "";
  constructor(public authService: AuthService) { }
  private user = JSON.parse(localStorage.getItem('user')!)
  ngOnInit(): void {
    this.userNickname = this.user.email.replace(/@[^ ]*/g, " ")

   
  }

}
