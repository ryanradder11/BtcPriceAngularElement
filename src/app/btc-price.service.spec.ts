import { TestBed, inject } from '@angular/core/testing';

import { BtcPriceService } from './btc-price.service';

describe('BtcPriceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BtcPriceService]
    });
  });

  it('should be created', inject([BtcPriceService], (service: BtcPriceService) => {
    expect(service).toBeTruthy();
  }));
});
