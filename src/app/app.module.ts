import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';

import { ModulesAmministrazioneModule } from './amministrazione/modules.amministrazione/modules.amministrazione.module';

import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ContainerComponent } from './container/container.component';
import { TemplateComponent } from './template/template.component';
import { TemplateOutlettComponent } from './template-outlett/template-outlett.component';
import { Hook01Component } from './hook01/hook01.component';
import { ChangeshookComponent } from './hook/changeshook/changeshook.component';
import { OnInithookComponent } from './hook/on-inithook/on-inithook.component';
import { DoCheckComponent } from './hook/do-check/do-check.component';
import { AfterContentInitHookComponent } from './hook/after-content-init-hook/after-content-init-hook.component';
import { App02Component } from './app02.component';
import { InputDecExampleComponent } from './decorators/input-dec-example/input-dec-example.component';
import { OutputDecExampleComponent } from './decorators/output-dec-example/output-dec-example.component';
import { App03Component } from './app03.component';
import { InpOutput03Component } from './decorators/inp-output-03/inp-output-03.component';


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
        OnInithookComponent,
        DoCheckComponent,
        AfterContentInitHookComponent,
        App02Component,
        InputDecExampleComponent,
        OutputDecExampleComponent,
        App03Component,
        InpOutput03Component
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
    bootstrap: [App03Component]
})
export class AppModule {
}
