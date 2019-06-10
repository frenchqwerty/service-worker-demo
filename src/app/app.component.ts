import {Component, OnDestroy, OnInit} from '@angular/core';
import {fromEvent, observable, Observable, Subscription} from 'rxjs';
import {NetworkStatus} from './enums/NetworkStatus';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
    onlineEvent: Observable<Event>;
    offlineEvent: Observable<Event>;

    subscriptions: Subscription[] = [];

    connectionStatusMessage: NetworkStatus;
    connectionStatus = navigator.onLine;

    constructor() {
        if (this.connectionStatus) {
            if (localStorage.getItem('statusNetwork') !== null) {
                this.connectionStatus = JSON.parse(localStorage.getItem('statusNetwork'));
            }
        }
    }

    ngOnInit(): void {
        /**
         * Get the online/offline status from browser window
         */
        this.onlineEvent = fromEvent(window, 'online');
        this.offlineEvent = fromEvent(window, 'offline');

        this.subscriptions.push(this.onlineEvent.subscribe(e => {
            this.connectionStatusMessage = NetworkStatus.ONLINE;
            this.connectionStatus = true;
        }));

        this.subscriptions.push(this.offlineEvent.subscribe(e => {
            this.connectionStatusMessage = NetworkStatus.OFFLINE;
            this.connectionStatus = false;
        }));

    }

    ngOnDestroy(): void {
        /**
         * Unsubscribe all subscriptions to avoid memory leak
         */
        this.subscriptions.forEach(subscription => subscription.unsubscribe());
    }
}
