import { Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {LogoutComponent} from "./components/logout/logout.component";
import {RegisterComponent} from "./components/register/register.component";
import {QuotesComponent} from "./components/quotes/quotes.component";
import {TodayComponent} from "./components/today/today.component";

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'quotes', component: QuotesComponent },
  { path: 'quotes/new', component: QuotesComponent },
  { path: 'today', component: TodayComponent },
  { path: 'today/new', component: TodayComponent },
];
