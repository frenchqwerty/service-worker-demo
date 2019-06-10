import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
    selector: 'app-list-image',
    templateUrl: './list-image.component.html',
    styleUrls: ['./list-image.component.scss']
})
export class ListImageComponent implements OnInit, OnChanges {
    imagesPath: Array<string> = [];
    defaultImagePath = '/assets/img/default-image.jpg';
    @Input() status: boolean;

    constructor() {
        this.imagesPath.push('/assets/img/20190104_164123.jpg');
        this.imagesPath.push('/assets/img/20190303_154529.jpg');
        this.imagesPath.push('/assets/img/ajaccio.png');
        this.imagesPath.push('/assets/img/batte.jpg');
        this.imagesPath.push('/assets/img/card_1dd616ad-f0d0-45d3-8909-24b578014654.jpg');
        this.imagesPath.push('/assets/img/df1l05nfwz821.jpg');
        this.imagesPath.push('/assets/img/jardin-tenryuji.jpg');
        this.imagesPath.push('https://i.imgur.com/RomtZ29.jpg');
        this.imagesPath.push('https://i.imgur.com/MnURlIY.jpg');
        this.imagesPath.push('https://i.imgur.com/15TPDsg.png');
    }

    ngOnInit() {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (!changes.status.currentValue && !navigator.onLine) {
            this.swapImagesToOfflineMode();
        } else if (changes.status.currentValue) {
            this.swapImagesToOnlineMode();
        }
    }

    private swapImagesToOfflineMode(): void {
        this.imagesPath.splice(-3, 3);
        for (let i = 0; i < 3; i++) {
            this.imagesPath.push(this.defaultImagePath);
        }
    }

    private swapImagesToOnlineMode(): void {
        this.imagesPath.splice(-3, 3);
        this.imagesPath.push('https://i.imgur.com/RomtZ29.jpg');
        this.imagesPath.push('https://i.imgur.com/MnURlIY.jpg');
        this.imagesPath.push('https://i.imgur.com/15TPDsg.png');
    }
}
