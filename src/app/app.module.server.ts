import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { App02Component } from './app02.component';
import { App03Component } from './app03.component';
import { App04Component } from './app04.component';
import { App05Component } from './app05.component';
import { App06Component } from './app06.component';
import { App07Component } from './app07.component';
import { App08Component } from './pipes/parent/app08.component';
import { App09Component } from './pipes/parent/app09.component';
import { App10Component } from './customPipes/parent/app10.component';
import { App12Component } from './routing/parent/app12.component';
import { App14Component } from './routing/parent/app14.component';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
  ],
  bootstrap: [App14Component],
})
export class AppServerModule { }
