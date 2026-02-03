import { EventEmitter, Output } from '@angular/core';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { AsyncPipe, CommonModule } from '@angular/common';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  imports:[CommonModule,
    MatCardModule,MatButtonModule,AsyncPipe,MatButtonToggleModule,
    FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule]
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
