import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {BehaviorSubject} from 'rxjs';
import { ProjectService } from './project.service';
@Injectable({
  providedIn: 'root'
})
export class UpdatelanguageService {
direction:any='ltr'
public languge: BehaviorSubject<String>
public storeLang:string ="en"
  constructor(public translate :TranslateService ) { 
   
    this.languge= new BehaviorSubject<String>(localStorage.getItem('lang') || "{}")
  }
  swichLang(lang :string){
    this.translate.use(lang)
    this.direction=lang=='ar'?'rtl':'ltr'
    localStorage.setItem('lang',lang)
    localStorage.setItem('direction', this.direction)
    this.translate.setDefaultLang(lang)
    this.languge.next(localStorage.getItem('lang') || "{}")
    console.log(this.languge.value)
    console.log(this.lang)

  }
  get lang():any{
    return this.languge.value
  }

}
