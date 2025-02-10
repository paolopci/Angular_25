import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home12Component } from './routing/parent/home12/home12.component'


const routes: Routes = [
  { path: 'home', component: Home12Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
