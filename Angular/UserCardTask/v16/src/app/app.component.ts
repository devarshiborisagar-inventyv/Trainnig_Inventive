import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ChildComponent } from './component/child/child.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  uname="Dev";

  userStatus=false;

  @ViewChild('input')childElement!:ElementRef<HTMLInputElement>;

  ngAfterViewInit(){
    console.log(`after view init in parent ${this.childElement.nativeElement.focus()}`);
  }

  statusChangedTriggerd(event:any){
      this.userStatus=event;
  }
}
