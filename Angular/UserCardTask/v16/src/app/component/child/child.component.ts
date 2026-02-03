import { Component, EventEmitter, Output } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input() username!:string;
  @Output() statusChanged=new EventEmitter<boolean>();
  age=20;
  imgUrl="https://material.angular.dev/assets/img/examples/shiba2.jpg";
  userStatus=false;

  handleToggle(event:any){
    this.userStatus=event;
    this.statusChanged.emit(event);
    console.log(event);
  }

  ngOnInit(){
    console.log("OnInit called of child");
  }

  ngOnChanges(){
    console.log("On Change called of Child");
  }

}
