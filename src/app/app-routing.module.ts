import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './COMPfOLDER/login/login.component';
import { RegisterComponent } from './COMPfOLDER/register/register.component';
import { NavbarMainComponent } from './navbar-main/navbar-main.component';
import { HomeComponent } from './COMPfOLDER/home/home.component';
import { ProfileComponent } from './COMPfOLDER/PROFILE-C/profile/profile.component';
import { CreatepostComponent } from './COMPfOLDER/createpost/createpost.component';
import { FriendsComponent } from './COMPfOLDER/friends/friends.component';
import { UserprofileComponent } from './COMPfOLDER/PROFILE-C/userprofile/userprofile.component';
import { OnlyLoggedInUsersGuard, AlwaysAuthChildrenGuard } from './SHARED/authgurd.service';


const routes: Routes = [
  { path: '', redirectTo: 'mainui', pathMatch: 'full',canActivate:[OnlyLoggedInUsersGuard]},
  {path:'login',component:LoginComponent}

  ,{path:'register',component:RegisterComponent,pathMatch:'full'},

  {path:'mainui',component:NavbarMainComponent,canActivate:[OnlyLoggedInUsersGuard],
  children:[

    {path:'',component:HomeComponent,outlet:'auxialry',canActivate:[OnlyLoggedInUsersGuard]},
    {path:'home',component:HomeComponent,outlet:'auxialry',canActivate:[OnlyLoggedInUsersGuard]},
    {path:'profile',component:UserprofileComponent,outlet:'auxialry',canActivate:[AlwaysAuthChildrenGuard]},
    { path:'createpost', component:CreatepostComponent,outlet:'auxialry',canActivate:[OnlyLoggedInUsersGuard]},
    {path:'friends' ,component:FriendsComponent,canActivate:[OnlyLoggedInUsersGuard],canActivateChild:[AlwaysAuthChildrenGuard],outlet:'auxialry'}

  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
