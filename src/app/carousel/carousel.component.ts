import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
    images: Array<string> = [];

    constructor() {
        this.images.push('assets/img/img-slider-1.jpg');
        this.images.push('assets/img/img-slider-2.jpg');
        this.images.push('assets/img/jardin-engakuji.jpg');
    }

    ngOnInit() {
    }

}
