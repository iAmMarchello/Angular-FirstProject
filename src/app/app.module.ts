// Angular library
import { BrowserModule }  from '@angular/platform-browser';
import { NgModule }       from '@angular/core';
import { FormsModule,
 ReactiveFormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';
import { Routes, RouterModule } from '@angular/router';


// My imports
import { AppComponent } from './app.component';
import { navbar }       from './navbar';
import { members }      from './members'
import { DemoForm }     from './DemoForm';
import { appRoutingProviders, routing }  from './app.routing';

@NgModule({
  declarations: [
    AppComponent, navbar, members, DemoForm
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule, routing,
    FormsModule  , ReactiveFormsModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
