import { Component, NgModule } from '@angular/core';

   @Component({
     selector: 'navbar',
     templateUrl: './navbar.html'
//     template     : `
//          
//`
   })

export class navbar{
     loginName     : string;
     loginPassword : string;

    constructor(){
       this.loginName = "Steph-Curry";
       this.loginPassword = "testPassword";
    }
}
