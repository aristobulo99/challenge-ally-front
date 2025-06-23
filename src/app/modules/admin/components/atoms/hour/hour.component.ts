import { Component, effect } from '@angular/core';
import { WeatherResponse } from '../../../interfaces/weather.interface';
import { WeatherapiService } from '../../../services/weatherapi/weatherapi.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-hour',
  standalone: true,
  imports: [],
  templateUrl: './hour.component.html',
  styleUrl: './hour.component.css',
  providers: [DatePipe]
})
export class HourComponent {

  protected currentData: WeatherResponse | undefined = undefined;
  
  constructor(
    private weatherapiService: WeatherapiService,
    private datePipe: DatePipe
  ){
    effect(() => {
      this.currentData = this.weatherapiService.currentData();
    })
  }

  get formatDate(){
    return this.datePipe.transform(this.currentData?.location.localtime, 'yyyy-MM-dd h:mm:ss a');
  }

}
