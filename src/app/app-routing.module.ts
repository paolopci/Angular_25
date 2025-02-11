import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home12Component } from './routing/parent/home12/home12.component';
import { App12Component } from './routing/parent/app12.component';
import { Work12Component } from './routing/parent/work12/work12.component';
import { News12Component } from './routing/parent/news12/news12.component';
import { Contact12Component } from './routing/parent/contact12/contact12.component';
import { About12Component } from './routing/parent/about12/about12.component';
import { Services12Component } from './routing/parent/services12/services12.component';
import { EmployeeComponent } from './routing/parent/employee/employee.component';
import { PageNotFoundComponent } from './routing/parent/page-not-found/page-not-found.component';
import { App14Component } from './routing/parent/app14.component';
import { Child14Component } from './routing/parent/child14/child14.component';
import { Child14bComponent } from './routing/parent/child14b/child14b.component';
import { Parent14Component } from './routing/parent/parent14.component';
import { App15Component } from './routing/parent/app15.component';
import { About15Component } from './routing/parent/about15/about15.component';
import { Products15Component } from './routing/parent/products15/products15.component';
import { Shirts15Component } from './routing/parent/shirts15/shirts15.component';
import { Pants15Component } from './routing/parent/pants15/pants15.component';
import { Shoes15Component } from './routing/parent/shoes15/shoes15.component';
import { Contacts15Component } from './routing/parent/contacts15/contacts15.component';




const routes: Routes = [
  { path: 'parent', component: App12Component },
  { path: 'home', component: Home12Component },
  { path: 'about', component: About12Component },
  { path: 'news', component: News12Component },
  { path: 'contact', component: Contact12Component },
  { path: 'work', component: Work12Component },
  { path: 'services', component: Services12Component },
  // { path: 'employee', component: EmployeeComponent },
  { path: 'employee/:empName/:empId', component: EmployeeComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'root14', component: App14Component },
  // Nested Routes
  {
    path: 'parent14', component: Parent14Component, children: [
      { path: 'child14', component: Child14Component },
      { path: 'child14B', component: Child14bComponent }
    ]
  },
  //----------   multi-level menu
  { path: 'home15', component: App15Component },
  { path: 'about15', component: About15Component },
  {
    path: 'products15', component: Products15Component, children: [
      { path: 'shirts15', component: Shirts15Component },
      { path: 'pants15', component: Pants15Component },
      { path: 'shoes15', component: Shoes15Component }
    ]
  },
  { path: 'contacts15', component: Contacts15Component },
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
