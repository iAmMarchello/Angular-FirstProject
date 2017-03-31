import { Component } from '@angular/core';

@Component({
  selector  : 'demoForm',
  template  : `
    <div class='container'>
      <h2 >Demo Form: Sign-up Details</h2>
        <form class='form-horizontal' #f="ngForm"  (ngSubmit)="onSubmit(f.value)"  >
          <div class='form-group'>
            <!-- Name Input field -->
            <label class='control-label col-sm-2' for="skuInput">Name:</label>
            <div class="col-sm-6">
              <input class='form-control' type="text" id="skuInput" placeholder="Enter name here..." name="userName" ngModel>
            </div>
          </div>
          
          <div class='form-group'>
            <!-- Email Input field -->
            <label class='control-label col-sm-2' for="skuInput">Email:</label>
            <div class="col-sm-6">
              <input class='form-control' type="email" id="skuInput" placeholder="E.g don.jones143@gmail.com" name="userEmail" ngModel>
            </div>
          </div>
         <div class='form-group'> 
            <div class="col-sm-offset-2 col-sm-10">
              <button type="submit" class="btn btn-default">Submit</button>
            </div>
         </div>
        </form>
    </div>
  `
})

export class DemoForm{
  userName  : string;
  userEmail : string;
  
  onSubmit(form : any): void{
    this.userName = form.userName;
    this.userEmail = form.userEmail;
    
    console.log("you submitted value: ", form);
    console.log("This is the name field: ", form.userName);
    console.log("This is the email field: ",form.userEmail);
  }
}