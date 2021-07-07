import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppComponent} from './app.component';
import { Photosmodule } from './photos/photos.module';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    Photosmodule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
