import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-messege',
  templateUrl: './messege.component.html',
  styleUrls: ['./messege.component.scss']
})
export class MessegeComponent {
  constructor( public translate: TranslateService){

  }
}
