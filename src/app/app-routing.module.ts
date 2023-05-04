import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { FridgeContentComponent } from './components/fridge-content/fridge-content.component';
import { GroceriesContentComponent } from './components/groceries-content/groceries-content.component';
import { MealsContentComponent } from './components/meals-content/meals-content.component';

import { AuthGuard } from './shared/guard/auth.guard';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { Try1Component } from './components/try1/try1.component';

const routes: Routes = [ { path: '', redirectTo: '/sign-in', pathMatch: 'full' }, 
{ path: 'sign-in', component: SignInComponent, },
{ path: 'sign-up', component: SignUpComponent, },
{ path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard], children:[
  {
    path:'', component: Try1Component,outlet:'dashboardRouter'
  },
  {
    path:'try1', component: Try1Component,outlet:'dashboardRouter'
  },
  {
    path:'fridge', component: FridgeContentComponent, outlet: 'dashboardRouter'
  },{
    path:'groceries', component: GroceriesContentComponent, outlet: 'dashboardRouter'
  },{
    path:'meals', component: MealsContentComponent, outlet: 'dashboardRouter'
  },
] },
//{ path: 'fridge', component: FridgeContentComponent , canActivate: [AuthGuard],outlet: 'dashboardRouter' },
//{ path: 'groceries', component: GroceriesContentComponent , canActivate: [AuthGuard] },
//{ path: 'meals', component: MealsContentComponent, canActivate: [AuthGuard]  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
