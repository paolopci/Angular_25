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
  { path: '**', component: PageNotFoundComponent },
  // Nested Routes
  {
    path: 'parent14', component: App14Component, children: [
      { path: 'child14', component: Child14Component },
      { path: 'child14B', component: Child14bComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
