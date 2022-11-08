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
      TuiTabsModule
],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
