import {NgModule} from '@angular/core';
import {BrowserModule, provideClientHydration} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TestComponent} from './test/test.component';

import {ModulesAmministrazioneModule} from './amministrazione/modules.amministrazione/modules.amministrazione.module';

import {FormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ContainerComponent } from './container/container.component';
import { TemplateComponent } from './template/template.component';
import { TemplateOutlettComponent } from './template-outlett/template-outlett.component';
import { Hook01Component } from './hook01/hook01.component';
import { ChangeshookComponent } from './hook/changeshook/changeshook.component';
import { OnInithookComponent } from './hook/on-inithook/on-inithook.component';


@NgModule({
    declarations: [
        AppComponent,
        TestComponent,
        LoginComponent,
        ContainerComponent,
        TemplateComponent,
        TemplateOutlettComponent,
        Hook01Component,
        ChangeshookComponent,
        OnInithookComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ModulesAmministrazioneModule,
        FormsModule
    ],
    providers: [
        provideClientHydration()
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
