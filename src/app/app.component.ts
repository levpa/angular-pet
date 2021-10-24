import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: `
    <h3> My main component </h3>
    <app-servers></app-servers>
    <app-servers></app-servers>`,
  // styleUrls: ['./app.component.less']
  styles: [`
    h3 {
      color: blue;
    }
  `]
})
export class AppComponent {
  title = 'angular-pet';
}
