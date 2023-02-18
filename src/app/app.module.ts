import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { ArtFormsComponent } from './Pages/art-forms/art-forms.component';
import { ArtGalleryComponent } from './Pages/art-gallery/art-gallery.component';
import { SignupComponent } from './Pages/signup/signup.component';
import { FooterComponent } from './unit/footer/footer.component';
import { SinglepageComponent } from './Pages/singlepage/singlepage.component';
import { NavbarComponent } from './unit/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArtFormsComponent,
    ArtGalleryComponent,
    SignupComponent,
    FooterComponent,
    SinglepageComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
