import { Component, OnInit,Input, Output } from '@angular/core';
import { Contacts } from '../contacts';
import { SharedService } from '../shared/shared.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrls: ['./contact-preview.component.css']
})

export class ContactPreviewComponent implements OnInit {
  today: number = Date.now();
  constructor(private shared : SharedService) {setInterval(() => {this.today = Date.now()}, 1); }

  contact!: Contacts 

  ngOnInit(): void {
    this.contact = this.shared.getData()
  }
}
