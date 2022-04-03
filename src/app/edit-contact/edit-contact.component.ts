import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Contacts } from '../contacts';
import { PhoneCodes } from '../PhoneCodes';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  constructor(private htttp: HttpClient, private shared: SharedService, private router: Router) { }
  pathPhoneCode = "http://localhost:3000/phoneCode";
  pathContacts = "http://localhost:3000/contact";
  phoneCodes!: PhoneCodes[];
  contact!: Contacts

  ngOnInit(): void {

    this.contact = this.shared.getData()

    this.htttp.get<PhoneCodes[]>(this.pathPhoneCode).subscribe(data => {
      this.phoneCodes = data;
    });
  }

  update(form: NgForm) {

    console.log(this.contact)

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
    var returnedvalues = this.htttp.patch<Contacts>(this.pathContacts + "/" + this.contact.id, this.contact, httpOptions).subscribe(data => { this.contact.id = data.id },
      error => { alert("There was an error " + error) }
    );

    this.goBackContactPreview(this.contact)

  }

  goBackContactPreview(row: any) {
    this.shared.setData(row)
    this.router.navigate(['/contactPreview']);
  }
}
