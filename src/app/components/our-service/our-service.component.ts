import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { UpdatelanguageService } from 'src/app/services/updatelanguage.service';

@Component({
  selector: 'app-our-service',
  templateUrl: './our-service.component.html',
  styleUrls: ['./our-service.component.scss']
})
export class OurServiceComponent implements OnInit{
direction: string='';
// direction:any='ltr'
constructor(public updatelang:UpdatelanguageService ,public translate:TranslateService) {
  
}
ngOnInit(): void {
  this.updatelang.languge.subscribe(()=>{
    this.direction=localStorage.getItem('direction') || 'ltr'
  })
}
}
