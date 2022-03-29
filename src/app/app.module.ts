import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { DeletedContactListComponent } from './deleted-contact-list/deleted-contact-list.component';
import { ContactPreviewComponent } from './contact-preview/contact-preview.component';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import {MaterialExampleModule} from './material-module';


import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';
import { MatSidenavModule } from '@angular/material/sidenav';


@NgModule({

  
  declarations: [
    AppComponent,
    NavComponent,
    ContactListComponent,
    CreateContactComponent,
    EditContactComponent,
    DeletedContactListComponent,
    ContactPreviewComponent,
  


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialExampleModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
