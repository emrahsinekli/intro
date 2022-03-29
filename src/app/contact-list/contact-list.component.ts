import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contacts } from '../contacts';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  constructor(private htttp: HttpClient) { }

  displayedColumns: string[] = ['firstName', 'email', 'phone', 'jobTitle'];
  dataSource!: Contacts[];

  ngOnInit(): void {
    this.htttp.get<Contacts[]>("http://localhost:3000/contact").subscribe(data => {
      this.dataSource = data;
    });
  }

}
