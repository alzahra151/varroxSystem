import { HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { UpdatelanguageService } from 'src/app/services/updatelanguage.service';

@Component({
  selector: 'app-service-projects',
  templateUrl: './service-projects.component.html',
  styleUrls: ['./service-projects.component.scss']
})
export class ServiceProjectsComponent {
  public selectedId: number = 0
  projects: any = []
  constructor(public projectservice: ProjectService, public languagServic: UpdatelanguageService) {

  }
  ngOnInit(): void {

    this.changLang()
  }

  changLang() {

    this.languagServic.languge.subscribe(() => {  //subsribe to behaviorsubject get selectedID 
      this.projectservice.httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'accept-language': this.languagServic.lang
        })
      }
      this.projectservice.serviceId.subscribe((val) => {  //subscribe to behaviorsubject get last language 
        this.selectedId = val
        this.projectservice.getprojectsByService(this.selectedId).subscribe({
          next: (data) => {
            this.projects = data
            console.log(this.projects)
          },
          error: (err) => {
            console.log(err)
          }
        })
      })

    })
  }
}

