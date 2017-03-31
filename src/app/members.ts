import { Component, NgModule }      from '@angular/core';

 @Component({
  selector  : 'members',
  styleUrls : ['members.css'] ,
  template  : `
<div> 
  <body class="myColor">
<div class="container">
  <div class="row">
    <h1 style="margin-left: 250px;">
        Old FlexiLANE Developers .
        </h1>
  </div>
    <div class="row">
        <div class="col-sm-3">
            <div class="card">
                <canvas class="header-bg" width="250" height="150" id="header-blur"></canvas>
                <div class="avatar">
                    <img src="assets/img/Stefan_twitter.jpg" alt="" />
                </div>
                <div class="content">
                    <p><b>Stefan Botha -- > {{this.userName}}</b> <br>
                       Web Developer <br>Angular 2, Springboot and elastic Search </p>
                    <p><button  type="button" (click)="onAction()"  class="btn btn-default">HIDE USER</button></p>
                </div>
            </div>
        </div>
        <div  class="col-sm-3">
           <button style='margin-left: 99px;' *ngIf="!(isVisible)" (click)="showUser()">Hello QUINTIN </button> 
            <div class="card" *ngIf = "isVisible">
                <canvas class="header-bg" width="250" height="70" id="header-blur"></canvas>
                <div class="avatar">
                    <img src="assets/img/Quintin_twitter.jpg" alt="" />
                </div>
                <div class="content" >
                    <p><b>Quintin Henning</b> <br>
                       Web Development in Angular 2 and FlexiLANE support</p>
                    <p><button type="button" (click)="onAction()" class="btn btn-default">Bye Quintin</button></p>
                </div>
            </div>

        </div>
        <div class="col-sm-3">
            <div class="card">
                <canvas class="header-bg" width="250" height="70" id="header-blur"></canvas>
                <div class="avatar">
                    <img src="assets/img/Roelof_twitter.jpg" alt="" />
                </div>
                <div class="content">
                    <p><b>Roelof Ferreira</b> <br>
                       FlexiLANE Developer</p>
                    <p><button type="button" class="btn btn-default">Contact</button></p>
                </div>
            </div>
        </div>
    </div>
</div>


<img class="src-image"  src="assets/img/Stefan_twitter.jpg"/>

<img class="src-image"  src="assets/img/Quintin_twitter.jpg"/>

<img class="src-image"  src="assets/img/Roelof_twitter.jpg"/>
</body>


</div>


`
})


export class members{
   isVisible: boolean = false;
   
   showUser(): void{
     this.isVisible = true;
   }
   
   onAction(): void{
     this.isVisible=false;
     }
}
//   constructor(){
//     this.isVisible = false;
//   }

  