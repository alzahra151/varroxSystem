import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Service } from '../models/service';
import { BehaviorSubject, Observable } from 'rxjs'
import { UpdatelanguageService } from './updatelanguage.service';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  public httpOptions = {}
  public serviceId: BehaviorSubject<number>
  constructor(public httpclient: HttpClient, public updateLang: UpdatelanguageService) {
    this.serviceId = new BehaviorSubject<number>(0)
    //  selectedService=this.serviceId.asObservable()
  }
  getServices(): Observable<Service[]> {
    console.log(this.updateLang.languge.value)
    console.log(this.httpOptions)
    return this.httpclient.get<Service[]>('https://varrox.onrender.com/varrox/category/categories', this.httpOptions)
  }
  getprojectsByService(serviceID: number): Observable<Project[]> {
    return this.httpclient.get<Project[]>(`https://varrox.onrender.com/varrox/project/projects?category=${serviceID}`, this.httpOptions)
  }
  serviceChange(id: number) {
    this.serviceId.next(id);
  }
  getAllProjects(){
    return this.httpclient.get<Project[]>('https://varrox.onrender.com/varrox/project/projects' ,this.httpOptions)
  }
  getprojectById(id:number){
   return this.httpclient.get<Project>(`https://varrox.onrender.com/varrox/project/project/${id}`,this.httpOptions)
  }
}
