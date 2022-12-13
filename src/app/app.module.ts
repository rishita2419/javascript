import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PracticeComponent } from './practice/practice.component';
import { FunctionComponent } from './function/function.component';
import { UsersComponent } from './users/users.component';

import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { ReversePipe } from './pipe/reverse.pipe';
import { PipeTypePipe } from './pipe/pipe-type.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PracticeComponent,
    FunctionComponent,
    UsersComponent,
    ReactiveFormComponent,
    ReversePipe,
    PipeTypePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
