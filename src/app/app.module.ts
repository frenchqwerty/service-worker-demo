import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
    declarations: [
        AppComponent,
        CarouselComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
        NgbModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
