import { NgModule, LOCALE_ID } from '@angular/core';
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
import { App04Component } from './app04.component';
import { ViewChild04Component } from './decorators/view-child04/view-child04.component';
import { App05Component } from './app05.component';
import { ContentChild05Component } from './decorators/content-child05/content-child05.component';
import { App06Component } from './app06.component';
import { HostBinding06Component } from './decorators/host-binding06/host-binding06.component';
import { HighlightElement06Directive } from './decorators/highlight-element06.directive';
import { HostListener07Component } from './decorators/host-listener07/host-listener07.component';
import { App07Component } from './app07.component';
import { App08Component } from './pipes/parent/app08.component';
import { App09Component } from './pipes/parent/app09.component';
import { App10Component } from './customPipes/parent/app10.component';
import { AppendTextPipe } from './customPipes/pipes/append-text.pipe';
import { SortNumbersPipe } from './customPipes/pipes/sort-numbers.pipe';
import { App12Component } from './routing/parent/app12.component';
import { Home12Component } from './routing/parent/home12/home12.component';
import { About12Component } from './routing/parent/about12/about12.component';
import { Contact12Component } from './routing/parent/contact12/contact12.component';
import { News12Component } from './routing/parent/news12/news12.component';
import { Work12Component } from './routing/parent/work12/work12.component';
import { Services12Component } from './routing/parent/services12/services12.component';
import { EmployeeComponent } from './routing/parent/employee/employee.component';
import { PageNotFoundComponent } from './routing/parent/page-not-found/page-not-found.component';
import { App14Component } from './routing/parent/app14.component';
import { Child14Component } from './routing/parent/child14/child14.component';
import { Child14bComponent } from './routing/parent/child14b/child14b.component';
import { Parent14Component } from './routing/parent/parent14.component';


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
        InpOutput03Component,
        App04Component,
        ViewChild04Component,
        App05Component,
        ContentChild05Component,
        App06Component,
        HostBinding06Component,
        HighlightElement06Directive,
        HostListener07Component,
        App07Component,
        App08Component,
        App09Component,
        App10Component,
        AppendTextPipe,
        SortNumbersPipe,
        App12Component,
        Home12Component,
        About12Component,
        Contact12Component,
        News12Component,
        Work12Component,
        Services12Component,
        EmployeeComponent,
        PageNotFoundComponent,
        App14Component,
        Child14Component,
        Child14bComponent,
        Parent14Component
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ModulesAmministrazioneModule,
        FormsModule
    ],
    providers: [
        provideClientHydration(),
        // { provide: LOCALE_ID, useValue: 'en' }
    ],
    bootstrap: [App14Component]
})
export class AppModule {
}
