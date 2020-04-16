import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hh-front';

  logged = false;
  username = '';
  password = '';

  login() {
    this.logged = true;
    console.log(this.username, this.password);
  }

}
