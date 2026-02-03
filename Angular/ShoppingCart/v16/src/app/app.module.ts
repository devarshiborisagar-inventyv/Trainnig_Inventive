import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { ChildComponent } from './component/child/child.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,MatCardModule,MatButtonModule,CommonModule,FormsModule
  ],
   providers: [provideAnimations()],
  bootstrap: [AppComponent]
})
export class AppModule { }
