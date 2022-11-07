import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

const routes: Routes = [ { path: '', redirectTo: '/sign-in', pathMatch: 'full' }, 
{ path: 'sign-in', component: SignInComponent },
{ path: 'dashboard', component: DashboardComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
