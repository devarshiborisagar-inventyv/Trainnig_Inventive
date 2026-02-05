import { Component, inject } from '@angular/core';
import { AppService } from './serivices/app.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone:true,
  imports:[JsonPipe]
})
export class AppComponent {
  title = 'v16';

  authService=inject(AppService);

  res="Loading...";

  userData:any;

  ngOnInit(){
    this.res=this.authService.getToken();
  }
  ngDoCheck(){
    this.res=this.authService.token;
    this.userData=this.authService.userdata;
  }

  getUser(){
    
  this.authService.getUser();

  }

}
