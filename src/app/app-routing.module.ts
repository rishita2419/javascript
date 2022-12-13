import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FunctionComponent } from './function/function.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

import { UsersComponent } from './users/users.component';


const routes: Routes = [
  {
    path:'function',component:FunctionComponent
  },
  {
    path:'users',component:UsersComponent
  },
  {
    path:'form',component:ReactiveFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
