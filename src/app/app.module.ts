import { ProductosService } from './../share/productos/productos.service';
import { CategoriasComponent } from './../share/categorias/categorias.component';
import { ProductosComponent } from './../share/productos/productos.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './../share/auth.service';
import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HeaderComponent } from '../share/header';
import { FooterComponent } from '../share/footer';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms'; 



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    ProductosComponent,
    CategoriasComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule
  ],
  providers: [
    AuthService,
    ProductosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
