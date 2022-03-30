import { Injectable } from '@angular/core';
import { Contacts } from '../contacts';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
  contact!: Contacts;
  constructor() { }

  setData(data: Contacts) {
    this.contact = data
  }

  getData() {
    return this.contact
  }
}
