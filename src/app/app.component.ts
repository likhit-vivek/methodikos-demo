import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'infraframe-demo';

  logout() {
    window.location.href = 'https://infraframe.com/';
  }
}
