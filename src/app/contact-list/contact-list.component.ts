import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Contacts } from '../contacts';
import { SharedService } from '../shared/shared.service';
import { Router } from '@angular/router';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  deletedContact: any;
  pathContacts = "http://localhost:3000/contact";
  model: Contacts = new Contacts();

  constructor(private htttp: HttpClient, private shared: SharedService, private router: Router, public dialog: MatDialog) { }

  @Output() event = new EventEmitter<Contacts>()

  displayedColumns: string[] = ['select', 'firstName', 'email', 'phone', 'jobTitle', 'star', 'edit', 'multiple'];
  dataSource!: Contacts[];

  initialSelection = [];
  allowMultiSelect = true;
  styleHeader: any;


  selectedItems = new SelectionModel<Contacts>(this.allowMultiSelect, this.initialSelection);

  ngOnInit(): void {

    console.log(this.selectedItems.isEmpty)


    this.htttp.get<Contacts[]>("http://localhost:3000/contact").subscribe(data => {
      this.dataSource = data;
    });

  }
  clickedRows = new Set<Contacts>();

  openContactPreview(row: any) {
    this.shared.setData(row)
    this.router.navigate(['/contactPreview']);
  }

  openEdit(row: any) {
    this.shared.setData(row)
    this.router.navigate(['/editContact']);
  }

  deleteMultibleSelected() {
    let selectedFileIds: number[] = [];

    let deletedContact: String
    for (let item of this.selectedItems.selected) {
      console.log(item.id);
      selectedFileIds.push(item.id);
      this.deletedContact = this.deletedContact + " " + item.firstName
    }
    if (confirm("Are you sure ?")) {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        })
      }
      selectedFileIds.forEach(id => {

        this.htttp.delete<Contacts>(this.pathContacts + "/" + id, httpOptions).subscribe(data => { id = data.id });
      })
    }
    selectedFileIds = [];
    this.deletedContact = ""
    window.location.reload();
  }
  deleteOneSelected() {
    if (confirm("One column deleted")) {
      alert("Silindi")
    }
  }
}
