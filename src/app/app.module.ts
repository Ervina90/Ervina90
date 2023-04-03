import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjekatComponent } from './projekat/projekat.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GlumciComponent } from './glumci/glumci.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

@NgModule({
  imports: [BrowserModule, AppRoutingModule],
  declarations: [
    AppComponent,
    ProjekatComponent,
    NavbarComponent,
    GlumciComponent,
    MovieDetailsComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
