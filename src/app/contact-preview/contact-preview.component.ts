import { Component, OnInit,Input, Output } from '@angular/core';
import { Contacts } from '../contacts';
import { SharedService } from '../shared/shared.service';
import { NgForm } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrls: ['./contact-preview.component.css']
})

export class ContactPreviewComponent implements OnInit {
  panelOpenState = false;
  today: number = Date.now();
  constructor(private htttp: HttpClient, private shared: SharedService, private router: Router) {setInterval(() => {this.today = Date.now()}, 1); }

  contact!: Contacts 

  ngOnInit(): void {
    this.contact = this.shared.getData()
  }


  openContactPreview(row: any) {
    this.shared.setData(row)
    this.router.navigate(['/editContact']);
  }
}
