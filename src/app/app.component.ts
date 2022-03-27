import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'intro';
  name = 'Emrah';

  addToCard() {
    alert("sdafsadf")
  }
  addNewContact() {
    alert("Added person")
  }
}
