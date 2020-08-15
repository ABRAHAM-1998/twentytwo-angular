import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './COMPfOLDER/login/login.component';
import { RegisterComponent } from './COMPfOLDER/register/register.component';
import { NavbarMainComponent } from './navbar-main/navbar-main.component';
import { HomeComponent } from './COMPfOLDER/home/home.component';
import { ProfileComponent } from './COMPfOLDER/profile/profile.component';
import { CreatepostComponent } from './COMPfOLDER/createpost/createpost.component';
import { FriendsComponent } from './COMPfOLDER/friends/friends.component';


const routes: Routes = [
  {path:'', component:LoginComponent,pathMatch:'full'}

  ,{path:'register',component:RegisterComponent,pathMatch:'full'},

  {path:'mainui',component:NavbarMainComponent,
  children:[

    {path:'home',component:HomeComponent,outlet:'auxialry'},
    {path:'profile',component:ProfileComponent,outlet:'auxialry'},
    { path:'createpost', component:CreatepostComponent,outlet:'auxialry'},
    {path:'friends' ,component:FriendsComponent,outlet:'auxialry'}

  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
