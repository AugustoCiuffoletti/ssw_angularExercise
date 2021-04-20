import { TestBed } from '@angular/core/testing';

import { OpenweatherService } from './openweather.service';
import { HttpClientModule } from "@angular/common/http";

describe('WeatherbitService', () => {
  beforeEach(() => TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ]
    }));

  it('should be created', () => {
    const service: OpenweatherService = TestBed.get(OpenweatherService);
    expect(service).toBeTruthy();
  });
});
