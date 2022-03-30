import { Component, OnInit,Input, Output } from '@angular/core';
import { Contacts } from '../contacts';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrls: ['./contact-preview.component.css']
})
export class ContactPreviewComponent implements OnInit {

  constructor(private shared : SharedService) { }

  contact!: Contacts 

  ngOnInit(): void {
    this.contact = this.shared.getData()
  }
}
