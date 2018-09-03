import {Component, NgModule, OnInit} from '@angular/core';
import {BtcPrice, BtcPriceService} from '../btc-price.service';
import {MatList} from '@angular/material';

@Component({
    selector: 'app-price',
    templateUrl: './price.component.html',
    styleUrls: ['./price.component.scss']
})

@NgModule({
    imports: [MatList],
})
export class PriceComponent implements OnInit {

    public btcPrice: BtcPrice;

    constructor(private btcService: BtcPriceService) {
        this.btcPrice = new BtcPrice();
    }

    ngOnInit() {
        this.btcService.getPrice().subscribe(price => {
            this.btcPrice = price;
        });
    }

}
