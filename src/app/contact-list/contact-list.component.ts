import { Component, OnInit, Input, Output, EventEmitter, IterableDiffers } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Contacts } from '../contacts';
import { SharedService } from '../shared/shared.service';
import { Router } from '@angular/router';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material/dialog';
import { isNgTemplate } from '@angular/compiler';

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


    this.htttp.get<Contacts[]>(this.pathContacts + "/?isDeleted=false").subscribe(data => {
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

    if (confirm("Are you sure ?")) {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        })
      }
      for (let item of this.selectedItems.selected) {
        console.log(item.id);
        selectedFileIds.push(item.id);
        this.deletedContact = this.deletedContact + " " + item.firstName

        item.isDeleted = true
        this.htttp.patch<Contacts>(this.pathContacts + "/" + item.id, item, httpOptions).subscribe(data => { data.isDeleted = true }
        );
      }

    }
    selectedFileIds = [];
    this.deletedContact = ""
    window.location.reload();
  }
  deleteOneSelected() {
    //TODO
  }
}
