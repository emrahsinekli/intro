import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contacts } from '../contacts';
import { SharedService } from '../shared/shared.service';
import { Router } from '@angular/router';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  constructor(private htttp: HttpClient, private shared: SharedService, private router: Router) { }

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

  openalert() {

  }
}
