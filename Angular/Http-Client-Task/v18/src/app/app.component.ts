import { Component, inject } from '@angular/core';
import { AppService } from './serivices/app.service';
import { JsonPipe } from '@angular/common';

interface Response{
  id:number,
  username: string,
  email: string,
  firstName: string,
  lastName: string,
  gender: string,
  image: string,
  accessToken: string, // JWT accessToken (for backward compatibility) in response and cookies
  refreshToken: string // refreshToken in response and cookies
}

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

  token="Loading...";

  userData:any;

  ngOnInit(){
   this.authService.getToken().subscribe((res:Response)=>{
      this.token=res.accessToken;
      console.log(this.token);
      localStorage.setItem('token',this.token);
      return this.token;
    });
  }
  getUser(){
    
    this.authService.getUser().subscribe((res)=>{
      console.log(res)
      this.userData=res;
    });;

  }

}
