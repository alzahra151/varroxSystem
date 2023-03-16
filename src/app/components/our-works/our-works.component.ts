import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import { UpdatelanguageService } from 'src/app/services/updatelanguage.service';

@Component({
  selector: 'app-our-works',
  templateUrl: './our-works.component.html',
  styleUrls: ['./our-works.component.scss']
})
export class OurWorksComponent implements OnInit {
  direction:string=''
  projects:Project[]=[]
  constructor(private projectService:ProjectService ,
              private languageService:UpdatelanguageService,
              public translate: TranslateService){
    
  }
  ngOnInit(): void {
    this.getProjectsWithChangLang()
  }
  getProjectsWithChangLang(){
     this.languageService.languge.subscribe(()=>{
      this.direction=localStorage.getItem('direction') || ''
      this.projectService.httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'accept-language': this.languageService.lang
        })
      }
      this.projectService.getAllProjects().subscribe({
        next:(data)=>{
            this.projects=data
            console.log(this.projects)
        },
        error:(err)=>{
           console.log(err)
        }
      })
     })
  }
}
