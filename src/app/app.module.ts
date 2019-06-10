import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CarouselComponent} from './carousel/carousel.component';
import {ListImageComponent} from './list-image/list-image.component';
import {ImageComponent} from './image/image.component';
import {NetworkHandlerComponent} from './network-handler/network-handler.component';
import {ConnectionServiceModule} from 'ng-connection-service';

@NgModule({
    declarations: [
        AppComponent,
        CarouselComponent,
        ListImageComponent,
        ImageComponent,
        NetworkHandlerComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
        NgbModule,
        ConnectionServiceModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
