import { Component } from '@angular/core';
import { OpenaiService } from './openai.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  textList: Array<any> = [{sno:1,text:'',response:''}];

  constructor(private openaiService: OpenaiService) {}

  generateText(data: any) {
    this.openaiService.generateText(data.text).then(text => {
      data.response = text;
      if(this.textList.length===data.sno){
        this.textList.push({sno:1,text:'',response:''});
      }
    });
  }
}
