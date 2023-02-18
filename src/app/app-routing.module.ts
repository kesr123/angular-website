import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtFormsComponent } from './Pages/art-forms/art-forms.component';
import { ArtGalleryComponent } from './Pages/art-gallery/art-gallery.component';
import { HomeComponent } from './Pages/home/home.component';
import { SignupComponent } from './Pages/signup/signup.component';
import { SinglepageComponent } from './Pages/singlepage/singlepage.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
     path:'Artforms',component:ArtFormsComponent
  },
  {
    path:'Artgallery',component:ArtGalleryComponent
 },
 {
  path:'signup',component:SignupComponent
},
{
  path:'singlepage',component:SinglepageComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
