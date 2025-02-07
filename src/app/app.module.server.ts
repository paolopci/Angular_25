import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { App02Component } from './app02.component';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
  ],
  bootstrap: [App02Component],
})
export class AppServerModule { }
