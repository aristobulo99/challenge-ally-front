import { Component, effect } from '@angular/core';
import { WeatherapiService } from '../../../services/weatherapi/weatherapi.service';
import { WeatherResponse } from '../../../interfaces/weather.interface';

@Component({
  selector: 'app-selected-country',
  standalone: true,
  imports: [],
  templateUrl: './selected-country.component.html',
  styleUrl: './selected-country.component.css'
})
export class SelectedCountryComponent {

  protected currentData: WeatherResponse | undefined = undefined;

  constructor(
    private weatherapiService: WeatherapiService
  ){
    effect(() => {
      this.currentData = this.weatherapiService.currentData();
    })
  }

}
