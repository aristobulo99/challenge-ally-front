import { HttpClient } from '@angular/common/http';
import { computed, Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { environment } from '../../../../../environments/environments';
import { lastValueFrom } from 'rxjs';
import { WeatherResponse } from '../../interfaces/weather.interface';

@Injectable({
  providedIn: 'root'
})
export class WeatherapiService {

  private url: string = environment.weatherApi.api_url;

  private controlCurrentData: WritableSignal<WeatherResponse | undefined> = signal(undefined);
  public currentData: Signal<WeatherResponse | undefined> = computed(() => this.controlCurrentData());

  constructor(
    private http: HttpClient
  ) { }

  async getCurrent(countryName: string): Promise<void>{
    const weatherResponse: WeatherResponse = await lastValueFrom(
      this.http.get<WeatherResponse>(`${this.url}/current.json?q=${countryName}`)
    )
    this.controlCurrentData.set(weatherResponse);
  }
}
