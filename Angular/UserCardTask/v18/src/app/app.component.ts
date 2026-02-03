import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { AsyncPipe, CommonModule } from '@angular/common';
import { ChildComponent } from './component/child/child.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports:[CommonModule,
    MatCardModule,MatButtonModule,AsyncPipe,MatButtonToggleModule,
    FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule,ChildComponent]
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
