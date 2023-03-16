import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import {TranslateModule,TranslateLoader} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader'
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CarouselComponent } from './components/carousel/carousel.component';
import { VisionComponent } from './components/vision/vision.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { OurServiceComponent } from './components/our-service/our-service.component';
import { OurWorksComponent } from './components/our-works/our-works.component';
import { FormsModule } from '@angular/forms';
import { ServiceProjectsComponent } from './components/service-projects/service-projects.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
// import { TranslateLoader } from '@ngx-translate/core/public_api';
// import { CarouselModule } from 'ngx-bootstrap/carousel';
import { MessegeComponent } from './messege/messege.component';
import { FooterComponent } from './footer/footer.component';

import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CarouselComponent,
    VisionComponent,
    AboutUsComponent,
    ProjectsComponent,
    OurServiceComponent,
    OurWorksComponent,
    ServiceProjectsComponent,
    ProjectDetailsComponent,
    MessegeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule ,
    // MatCarouselModule,
    // CarouselModule,
    TranslateModule.forRoot({
      defaultLanguage:localStorage.getItem('lang') || 'en',
      loader :{
        provide :TranslateLoader,
       useFactory:HttpLoaderFactory,
       deps:[HttpClient]
      }
    }),
    NgbModule,
  
  ],
  exports: [
    ProjectDetailsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function HttpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http )
}