import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-network-handler',
    templateUrl: './network-handler.component.html',
    styleUrls: ['./network-handler.component.scss']
})
export class NetworkHandlerComponent implements OnInit {
    @Input() status: boolean;
    @Output() statusChange = new EventEmitter<boolean>();

    constructor() {
    }

    ngOnInit() {
    }

    switchNetworkStatus(): void {
        if (navigator.onLine) {
            this.status = !this.status;
            localStorage.setItem('statusNetwork', this.status.toString());
            this.statusChange.emit(this.status);
        }
    }

}
