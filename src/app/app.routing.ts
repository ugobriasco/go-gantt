import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { ChartComponent } from './chart/chart.component';


export const routes: Routes = [
{
	path: '', 
	redirectTo: '/landing', 
	pathMatch: 'full'
},
{
	path: 'landing',
	component: LandingComponent
},
{
	path: 'chart', 
	component: ChartComponent
},


];

export const routing = RouterModule.forRoot(routes);