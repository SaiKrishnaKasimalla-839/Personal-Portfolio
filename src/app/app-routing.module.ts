import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
          path:"",component:WelcomeComponent
  },
  { 
    path: 'gallery', component: GalleryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
