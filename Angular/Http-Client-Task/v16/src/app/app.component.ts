import { Component, inject } from '@angular/core';
import { AppService } from './serivices/app.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'v16';

  authService=inject(AppService);

  token="Loding..."

  userData:any;

  ngOnInit(){
    this.authService.getToken();
  }
  ngDoCheck(){
    this.token=this.authService.token;
    this.userData=this.authService.userdata;
  }

  getUser(){
    
  this.authService.getUser();

  }

}
