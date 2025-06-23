import { Component, effect } from '@angular/core';
import { Country } from '../../../interfaces/countries.interface';
import { CountriesService } from '../../../services/countries/countries.service';

@Component({
  selector: 'app-available-countries',
  standalone: true,
  imports: [],
  templateUrl: './available-countries.component.html',
  styleUrl: './available-countries.component.css'
})
export class AvailableCountriesComponent {

  public conuntries: Country[] = [];

  constructor(
      private countriesService: CountriesService
  ){
    effect(() => {
      this.conuntries = this.countriesService.countries()
    })
  }

  onSelectionCountrie(countrie: Country){
    this.countriesService.setControlSelection(countrie);
  }
}
