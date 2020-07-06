import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductDisplayComponent} from './product-display/product-display.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ProductCreationComponent} from './product-creation/product-creation.component';


const routes: Routes = [
  { path: 'register', component : RegisterComponent },
  { path: 'login', component : LoginComponent },
  { path: 'create', component : ProductCreationComponent },
  { path: 'display', component : ProductDisplayComponent },
  { path: '**', component : LoginComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
