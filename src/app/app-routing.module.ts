import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactPreviewComponent } from './contact-preview/contact-preview.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { DeletedContactListComponent } from './deleted-contact-list/deleted-contact-list.component';
import { NavComponent } from './nav/nav.component';
import {MatInputModule} from '@angular/material/input';


const routes: Routes = [
  {path:'',redirectTo : 'contact-list',pathMatch:'full'},
  {path:'createdContact',component:CreateContactComponent},
  {path:'contactList',component:ContactListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
