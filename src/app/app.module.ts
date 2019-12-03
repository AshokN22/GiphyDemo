import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import {NgxInputTagModule}  from  '@ngx-lite/input-tag';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { GIFImageService } from './GIFImages.Service';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxInputTagModule.forRoot(),
    HttpModule,
    NgxPaginationModule
  ],
  providers: [GIFImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
