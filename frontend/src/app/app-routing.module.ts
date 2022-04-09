import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { SignupComponent } from './signup/signup.component';
import { BookingComponent } from './booking/booking.component';
import { ReserveComponent } from './reserve/reserve.component';
import { SearchComponent } from './search/search.component'

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'login', component:LoginComponent},
  { path: 'logout', component:LogoutComponent},
  { path: 'signup', component:SignupComponent},
  { path: 'booking', component:BookingComponent, canActivate: [AuthGuard]},
  { path: 'reserve', component:ReserveComponent, canActivate: [AuthGuard]},
  { path: 'search', component:SearchComponent, canActivate: [AuthGuard]},
  { path: '', redirectTo:'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ HomeComponent , LoginComponent , LogoutComponent, SignupComponent, BookingComponent, ReserveComponent ,SearchComponent]
