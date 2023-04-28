import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddChefComponent } from './add-chef/add-chef.component';
import { AddPlatComponent } from './add-plat/add-plat.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  {path:  "home" , component: HomeComponent},
  {path: "singup" , component: SignupComponent },
  {path: "login" , component: LoginComponent},
  {path: "add-chef" , component: AddChefComponent},
  {path: "add-plat" , component: AddPlatComponent},
  {path: "chefs", component: TeamComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
