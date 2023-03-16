import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselComponent } from './components/carousel/carousel.component';
import { OurWorksComponent } from './components/our-works/our-works.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { ServiceProjectsComponent } from './components/service-projects/service-projects.component';

const routes: Routes = [
  {path :"" ,component:CarouselComponent},
  {path:"projects" ,component:ServiceProjectsComponent},
  {path:"project/:id" , component:ProjectDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
