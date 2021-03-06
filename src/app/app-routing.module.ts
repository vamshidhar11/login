import { HomePageComponent } from './home-page/home-page.component';
import { NgModule } from '@angular/core';
import { LoginformComponent } from './loginform/loginform.component';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';

const appRoutes: Routes = [
  {
    path: '',
    component: LoginformComponent,
    pathMatch: 'full',
  },
  { path: 'register', component: RegisterComponent },
  { path: 'forgotpassword', component: ForgotpasswordComponent },
  { path: 'home-page', component: HomePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
