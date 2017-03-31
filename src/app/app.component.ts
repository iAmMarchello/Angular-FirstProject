import { Component, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }         from '@angular/forms';


@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html', // Similar to template: accept we specify a separate file that contains the template view
  //styleUrls: ['./app.component.css'] 
  template     : `
    <navbar></navbar>

    <router-outlet></router-outlet> 
  `
})
export class AppComponent {
  title = 'app works!';
}
