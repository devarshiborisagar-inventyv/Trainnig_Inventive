import { Component, effect, inject } from '@angular/core';
import { AppService } from './services/app.service';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  standalone:true,
  imports:[JsonPipe,AsyncPipe]
})
export class AppComponent {
  title = 'v16';

  authService=inject(AppService);

  // res="Loading...";

  // userData:any;

  token!:Observable<any>;

  constructor(){
  }

  ngOnInit(){
   this.token=this.authService.getToken();
   console.log(typeof this.token)
  }

  getUser(){
    
  this.authService.getUser();

  }

}
