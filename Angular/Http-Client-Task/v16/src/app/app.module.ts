import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { AppComponent } from './app.component';
import { authInterceptor } from './interceptors/auth.interceptor';
import { AsyncPipe, JsonPipe } from '@angular/common'; 

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,JsonPipe,AsyncPipe
  ],
  providers:[provideHttpClient(withInterceptors([authInterceptor]))],
  bootstrap: [AppComponent]
})
export class AppModule { }
