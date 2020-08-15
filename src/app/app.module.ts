import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';  


import { HttpClientModule } from '@angular/common/http';
// MATERIAL_imports
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';

import { ApiserviceService } from "./apiservice.service";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './COMPfOLDER/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './COMPfOLDER/register/register.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarMainComponent } from './navbar-main/navbar-main.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from "@angular/material/toolbar";;
import { MatListModule } from "@angular/material/list";
import { HomeComponent } from './COMPfOLDER/home/home.component';
import { ProfileComponent } from './COMPfOLDER/profile/profile.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { CreatepostComponent } from './COMPfOLDER/createpost/createpost.component';
import { FormsModule } from "@angular/forms";

import {MatGridListModule} from '@angular/material/grid-list';
import { FriendsComponent } from './COMPfOLDER/friends/friends.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

// ...


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarMainComponent,
    HomeComponent,
    ProfileComponent,
    CreatepostComponent,
    FriendsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,

    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    ModalModule,
    FormsModule,


    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    CommonModule,
    MatAutocompleteModule,

    


    BrowserAnimationsModule,
    ImageCropperModule,
    MatGridListModule,
    
    


    NgbModule,
 
  ],
  exports:[],
  
  providers: [ApiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule {  }

// ng serve --proxy-config proxy.conf.json
