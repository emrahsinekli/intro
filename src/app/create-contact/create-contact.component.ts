import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contacts } from '../contacts';
import { PhoneCodes } from '../PhoneCodes';



@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css']
})
export class CreateContactComponent implements OnInit {


  constructor(private htttp: HttpClient) { }
  pathPhoneCode = "http://localhost:3000/phoneCode";
  pathContacts = "http://localhost:3000/contact";
  model: Contacts = new Contacts();
  phoneCodes!: PhoneCodes[];

  ngOnInit(): void {
    this.htttp.get<PhoneCodes[]>(this.pathPhoneCode).subscribe(data => {
      this.phoneCodes = data;
    });
  }
  add(form: NgForm) {

    console.log(this.model);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
    this.model.isDeleted = false;
    this.htttp.post<Contacts>(this.pathContacts, this.model, httpOptions).subscribe(data => { });

    window.location.reload();
  }
}
