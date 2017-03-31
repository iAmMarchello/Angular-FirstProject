import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { navbar }               from './navbar';
import { members }              from './members';
import { DemoForm }             from './DemoForm';
import { AppComponent}          from './app.component';

export const appRoutes: Routes = [
  //{ path : '' , redirectTo: 'app/navbar', pathMatch: 'full' },
  { path : 'app/DemoForm' , component: DemoForm  },
  { path : 'app/members', component: members },
  { path : 'app/AppComponent', component: AppComponent}
 ];

export const appRoutingProviders: any[] = [];
export const routing            : ModuleWithProviders = RouterModule.forRoot(appRoutes); 