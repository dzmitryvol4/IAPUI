import { ApplicationRef, DoBootstrap, Injector, NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app.routes";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CardModule} from "primeng/card";
import {InputTextModule} from "primeng/inputtext";
import { Router } from "@angular/router";
import { MainModule } from "./main/main.module";

@NgModule({
    declarations:[ 
        AppComponent 
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        InputTextModule,
        CardModule,
        MainModule
    ],
    bootstrap: []
})

export class AppModule implements DoBootstrap{
    constructor(private readonly injector: Injector, private readonly router: Router, private readonly applicationRef: ApplicationRef) {
    } 

    ngDoBootstrap(appRef: ApplicationRef) {
        appRef.bootstrap(AppComponent); // Or some other component
      }
}