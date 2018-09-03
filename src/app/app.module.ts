///<reference path="../../node_modules/@angular/common/http/src/backend.d.ts"/>
import {BrowserModule} from '@angular/platform-browser';
import {Injector, LOCALE_ID, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {PriceComponent} from './price/price.component';
import { HttpClientModule } from '@angular/common/http';

import { registerLocaleData } from '@angular/common';
import localeNl from '@angular/common/locales/nl';
registerLocaleData(localeNl, 'nl');

import { createCustomElement } from '@angular/elements';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule, MatList, MatListModule} from '@angular/material';


@NgModule({
    declarations: [
        AppComponent,
        PriceComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatListModule,
        MatCardModule
    ],
    providers: [{provide: LOCALE_ID, useValue: 'nl' }],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(private injector: Injector) {
        const elm = createCustomElement(AppComponent, { injector: this.injector });
        customElements.define('btc-price-element', elm);
    }
    ngDoBootstrap() {
    }
}
