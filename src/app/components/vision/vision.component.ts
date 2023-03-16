import { Component, OnInit } from '@angular/core';
import { UpdatelanguageService } from 'src/app/services/updatelanguage.service';
@Component({
  selector: 'app-vision',
  templateUrl: './vision.component.html',
  styleUrls: ['./vision.component.scss']
})
export class VisionComponent implements OnInit {
  direction: string='';
  constructor(public updatlang:UpdatelanguageService){
  }
  ngOnInit(): void {
    this.updatlang.languge.subscribe(()=>{
      this.direction=localStorage.getItem('direction') || 'ltr'
    })
  }
  // get visionImage(){
  //   return this.updatlang.direction=='rlt'?"assets/vision.jepg" :"assets/envision.jpg"
  // }

}
