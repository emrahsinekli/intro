import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contacts } from '../contacts';
import { SharedService } from '../shared/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  constructor(private htttp: HttpClient, private shared: SharedService,private router: Router) { }

  @Output() event = new EventEmitter<Contacts>()

  displayedColumns: string[] = ['firstName', 'email', 'phone', 'jobTitle'];
  dataSource!: Contacts[];

  ngOnInit(): void {
    this.htttp.get<Contacts[]>("http://localhost:3000/contact").subscribe(data => {
      this.dataSource = data;
    });
  }

  clickedRows = new Set<Contacts>();
  openContactPreview(row: Contacts) {
    
    this.shared.setData(row)
    this.router.navigate(['/contactPreview']);
  }
}
