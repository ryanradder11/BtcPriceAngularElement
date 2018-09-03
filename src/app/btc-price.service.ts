import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BtcPrice {
    high: number ;
    last: number;
    timestamp: number;
    bid: number;
    vwap: number;
    volume: number;
    low: number;
    ask: number;
    open: number;
}

@Injectable({
    providedIn: 'root'
})
export class BtcPriceService {

    private http: HttpClient;

    constructor(http: HttpClient) {
        this.http = http;
    }

    getPrice(): Observable<BtcPrice> {
        return this.http.get<BtcPrice>('https://www.bitstamp.net/api/ticker/');
    }
}
