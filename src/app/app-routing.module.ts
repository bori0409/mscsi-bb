import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { FridgeContentComponent } from './components/fridge-content/fridge-content.component';
import { GroceriesContentComponent } from './components/groceries-content/groceries-content.component';
import { MealsContentComponent } from './components/meals-content/meals-content.component';

const routes: Routes = [ { path: '', redirectTo: '/sign-in', pathMatch: 'full' }, 
{ path: 'sign-in', component: SignInComponent },
{ path: 'dashboard', component: DashboardComponent },
{ path: 'fridge', component: FridgeContentComponent },
{ path: 'groceries', component: GroceriesContentComponent },
{ path: 'meals', component: MealsContentComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
