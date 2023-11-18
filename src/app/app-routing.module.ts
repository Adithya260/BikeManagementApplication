import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DetailsComponent } from './details/details.component';
import { EmiComponent } from './emi/emi.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';




const routes: Routes = [

{path:'', component:HomeComponent},
{path:'buy', component:AboutComponent},
{path:'details',component:DetailsComponent},
{path:'emi',component:EmiComponent},
{path:'gallery',component:GalleryComponent},
{path:'contact',component:ContactComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
 
}
