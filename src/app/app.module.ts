import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';

import { CreateComponentComponent } from './create-component/create-component.component';

import { HttpClientModule } from '@angular/common/http';
import { AssignComponentComponent } from './assign-component/assign-component.component';
import { ListComponentComponent } from './list-component/list-component.component';
import { IndexComponentComponent } from './index-component/index-component.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    CreateComponentComponent,
    AssignComponentComponent,
    ListComponentComponent,
    IndexComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot() 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
