import { Component, ElementRef, Input, signal, ViewChild } from '@angular/core';
import { ChildComponent } from './component/child/child.component';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { AsyncPipe, CommonModule } from '@angular/common';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone:true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports:[ChildComponent,
    CommonModule,
    MatCardModule,MatButtonModule,AsyncPipe,MatButtonToggleModule,
    FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule]
})
export class AppComponent {
  uname=signal<string>("Devarshi");

  userStatus=signal(false);

  @ViewChild('input')childElement!:ElementRef<HTMLInputElement>;

  ngAfterViewInit(){
    console.log(`after view init in parent ${this.childElement.nativeElement.focus()}`);
  }

  statusChangedTriggerd(event:any){
      this.userStatus.set(event);
      console.log(event);
  }
}
