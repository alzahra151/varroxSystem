import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Service } from 'src/app/models/service';
import { ProjectService } from 'src/app/services/project.service';
import { UpdatelanguageService } from 'src/app/services/updatelanguage.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  services:any=[]
  selectedservicId:number=0
  direction:string=''
  constructor(public translate :TranslateService ,public languagservice:UpdatelanguageService,
    public projectService:ProjectService){
   
  }
  ngOnInit(): void {
    this.changLang()
   
  }
  swichLang(lang :string){
    this.languagservice.swichLang(lang)
  }
 
  changLang(){
    this.languagservice.languge.subscribe(()=>{
      this.direction=localStorage.getItem('direction') || 'ltr'
      this.projectService.httpOptions={
        headers: new HttpHeaders({
          'Content-Type' : 'application/json',
          'accept-language' : this.languagservice.lang
        })
      }
      
        this.projectService.getServices().subscribe({
          next:(data)=>{
            this.services=data
            console.log ( this.services)
          },
          error:(err)=>{
             console.log(err)
          }
        })
     
    })
  }
  getserviceProjects(serviceId:number){
    console.log(serviceId)
    this.projectService.serviceChange(serviceId)
  }
}

