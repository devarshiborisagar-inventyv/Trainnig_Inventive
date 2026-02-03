import { Component, effect, EventEmitter, input, Output, Signal, signal } from '@angular/core';
import { Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { AsyncPipe, CommonModule } from '@angular/common';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  standalone:true,
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  imports:[ CommonModule, MatCardModule,MatButtonModule,AsyncPipe,MatButtonToggleModule,
    FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule]
})
export class ChildComponent {

  username=input<string>("");
  childUname=signal("");

  @Output() statusChanged=new EventEmitter<boolean>();
  @Output() signalChange=new EventEmitter<string>();
  age=signal(20);
  imgUrl=signal("https://material.angular.dev/assets/img/examples/shiba2.jpg");
  userStatus=signal(false);

  handleToggle(event:any){
    this.userStatus.set(event);
    this.statusChanged.emit(event);
    console.log(event);
  }

  ngOnInit(){
    console.log("OnInit called of child");
  }

  ngOnChanges(){
    console.log("On Change called of Child");
    this.childUname.set(this.username());
   
  }

  handleInComponentChange(event:any){
    this.childUname.set(event);
    this.signalChange.emit(event);
  }
}
