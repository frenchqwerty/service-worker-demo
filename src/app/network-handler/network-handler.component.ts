import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
    selector: 'app-network-handler',
    templateUrl: './network-handler.component.html',
    styleUrls: ['./network-handler.component.scss']
})
export class NetworkHandlerComponent implements OnInit {
    text: string;
    @Input() status: boolean;
    @Output() statusChange = new EventEmitter<boolean>();

    constructor() {
    }

    ngOnInit() {
        if (this.status) {
            this.text = 'En ligne';
        } else {
            this.text = 'Hors ligne';
        }
    }

    switchNetworkStatus(): void {
        if (navigator.onLine) {
            this.status = !this.status;
            localStorage.setItem('statusNetwork', this.status.toString());
            this.statusChange.emit(this.status);
            if (this.status) {
                this.text = 'En ligne';
            } else {
                this.text = 'Hors ligne';
            }
        }
    }

}
