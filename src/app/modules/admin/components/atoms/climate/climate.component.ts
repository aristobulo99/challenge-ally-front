import { Component, effect } from '@angular/core';
import { WeatherResponse } from '../../../interfaces/weather.interface';
import { WeatherapiService } from '../../../services/weatherapi/weatherapi.service';

@Component({
  selector: 'app-climate',
  standalone: true,
  imports: [],
  templateUrl: './climate.component.html',
  styleUrl: './climate.component.css'
})
export class ClimateComponent {

  protected currentData: WeatherResponse | undefined = undefined;
  
    constructor(
      private weatherapiService: WeatherapiService
    ){
      effect(() => {
        this.currentData = this.weatherapiService.currentData();
      })
    }

}
