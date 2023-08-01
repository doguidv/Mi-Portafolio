import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeDateListComponent } from './home-date-list/home-date-list.component';
import { AboutComponent } from './about/about.component';
import { FormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { NameListComponent } from './name-list/name-list.component';
import { ChaosTableComponent } from './chaos-table/chaos-table.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeDateListComponent,
    AboutComponent,
    NameListComponent,
    ChaosTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
