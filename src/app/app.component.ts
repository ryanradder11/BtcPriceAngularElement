import {Component, ViewEncapsulation} from '@angular/core';
import {BtcPriceService} from './btc-price.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
    title = 'app';
    btcservce = BtcPriceService;
}
