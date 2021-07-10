import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppComponent} from './app.component';
import { Photosmodule } from './photos/photos.module';
import { AppRoutingmodule } from './app.routing.module';
import { ErrorsModule } from './errors/errors.module';


@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [
    BrowserModule,
    Photosmodule,
    AppRoutingmodule,
    ErrorsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
