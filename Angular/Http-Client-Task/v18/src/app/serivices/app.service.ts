import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';


interface UserData{
  username:string,
  password:string,
  expiresInMins:number
}

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


@Injectable({
  providedIn: 'root'
})
export class AppService {

  http=inject(HttpClient);
  
  constructor() { }

  token="";

  userdata:any; 

  getToken(){
      this.http.post<Response>('https://dummyjson.com/auth/login', {
      username: 'emilys',
      password: 'emilyspass',
      expiresInMins: 30
    }).subscribe((res:Response)=>{
      this.token=res.accessToken;
      console.log(this.token);
      localStorage.setItem('token',this.token);
      return this.token;
    });

    return this.token;
  }

  getUser(){
    this.http.get<Response>('https://dummyjson.com/auth/me').subscribe((res)=>{
      console.log(res)
      this.userdata=res;
    });
  } 

}
