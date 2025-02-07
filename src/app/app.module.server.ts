import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { App02Component } from './app02.component';
import { App03Component } from './app03.component';
import { App04Component } from './app04.component';
import { App05Component } from './app05.component';
import { App06Component } from './app06.component';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
  ],
  bootstrap: [App06Component],
})
export class AppServerModule { }
