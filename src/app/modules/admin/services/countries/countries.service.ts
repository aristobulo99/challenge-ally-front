import { HttpClient } from '@angular/common/http';
import { computed, Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Country } from '../../interfaces/countries.interface';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private controlCountries: WritableSignal<Country[]> = signal([]);
  public countries: Signal<Country[]> = computed(() => this.controlCountries());

  constructor(
    private http: HttpClient
  ) { }

  async getThreeCountries(): Promise<void>{
    try {
      const countries: Country[] = await lastValueFrom(
        this.http.get<Country[]>('https://restcountries.com/v3.1/alpha?codes=mx,co,fr&fields=name,cca2,flags')
      );
      this.controlCountries.set(countries);
    }
    catch(e) {
      console.warn(e);
    }
  }
}
