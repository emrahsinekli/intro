import { Component, OnInit, Input, Output, EventEmitter, IterableDiffers } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Contacts } from '../contacts';
import { SharedService } from '../shared/shared.service';
import { Router } from '@angular/router';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material/dialog';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-deleted-contact-list',
  templateUrl: './deleted-contact-list.component.html',
  styleUrls: ['./deleted-contact-list.component.css']
})
export class DeletedContactListComponent implements OnInit {

  deletedContact: any;
  pathContacts = "http://localhost:3000/contact";
  model: Contacts = new Contacts();

  constructor(private htttp: HttpClient, private shared: SharedService, private router: Router, public dialog: MatDialog) { }

  @Output() event = new EventEmitter<Contacts>()

  displayedColumns: string[] = ['select', 'firstName', 'email', 'phone', 'jobTitle', 'recovery'];
  dataSource!: Contacts[];

  initialSelection = [];
  allowMultiSelect = true;
  styleHeader: any;


  selectedItems = new SelectionModel<Contacts>(this.allowMultiSelect, this.initialSelection);

  ngOnInit(): void {

    console.log(this.selectedItems.isEmpty)


    this.htttp.get<Contacts[]>(this.pathContacts + "/?isDeleted=true").subscribe(data => {
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

  recoveryOrDeleteMultibleSelected(isRecovery: boolean) {
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

        item.isDeleted = false
        if (isRecovery) {
          this.htttp.patch<Contacts>(this.pathContacts + "/" + item.id, item, httpOptions).subscribe(data => { data.isDeleted = true });
        }
        else {
          this.htttp.delete<Contacts>(this.pathContacts + "/" + item.id, httpOptions).subscribe(data => { item.id = data.id });
        }
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
