import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


export const routes: Routes = [
  { path: '', loadChildren: './home/home.module#HomeModule' },
  { path: 'home', loadChildren: './home/home.module#HomeModule' },
  { path: '**', loadChildren: './home/home.module#HomeModule' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });

