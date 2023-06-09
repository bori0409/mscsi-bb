import { TuiRootModule, TuiDialogModule, TuiAlertModule } from "@taiga-ui/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment.prod';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthService } from "./shared/services/auth.service";
import {TuiInputModule} from '@taiga-ui/kit';
import { ReactiveFormsModule } from '@angular/forms';
import {TuiInputPasswordModule} from '@taiga-ui/kit';
import {TuiButtonModule} from '@taiga-ui/core';
import {TuiTabsModule} from '@taiga-ui/kit';
import { TabBarComponent } from './components/tab-bar/tab-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { FridgeContentComponent } from './components/fridge-content/fridge-content.component';
import { GroceriesContentComponent } from './components/groceries-content/groceries-content.component';
import { MealsContentComponent } from './components/meals-content/meals-content.component';
import { AuthGuard } from "./shared/guard/auth.guard";
import {TuiBadgedContentModule} from '@taiga-ui/kit';
import {TuiIslandModule} from '@taiga-ui/kit';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import {TuiAvatarModule} from '@taiga-ui/kit';
import { ProductBadgeComponent } from './components/product-badge/product-badge.component';
import { DefaultProductBadgeComponent } from './components/default-product-badge/default-product-badge.component';
import { Try1Component } from './components/try1/try1.component';
import { VibrationService } from "./shared/vibration.service";
import { StartScreenComponent } from './components/start-screen/start-screen.component';
import { GameScreenComponent } from './components/game-screen/game-screen.component';
import { EndScreenComponent } from './components/end-screen/end-screen.component';
import {TuiBadgeModule} from '@taiga-ui/kit';
//import {TuiPullToRefreshModule} from '@taiga-ui/addon-mobile';
// import { Vibration } from '@ionic-native/vibration/ngx';
// fix error with ngx vibration module 
//  

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    DashboardComponent,
    TabBarComponent,
    HeaderComponent,
    FridgeContentComponent,
    GroceriesContentComponent,
    MealsContentComponent,
    SignUpComponent,
    ProductBadgeComponent,
    DefaultProductBadgeComponent,
    Try1Component,
    StartScreenComponent,
    GameScreenComponent,
    EndScreenComponent,
   
  ],
  imports: [TuiButtonModule,
    BrowserModule,
    AppRoutingModule,
     AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    ReactiveFormsModule,
      BrowserAnimationsModule,
      TuiRootModule,
      TuiDialogModule,
      TuiAlertModule,
      TuiInputModule,
      TuiInputPasswordModule,
      TuiTabsModule,
      TuiBadgedContentModule,
      TuiIslandModule,
      TuiAvatarModule,
      TuiAlertModule,
      TuiBadgeModule
      
      
],
  providers: [AuthGuard, VibrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
