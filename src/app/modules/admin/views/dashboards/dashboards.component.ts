import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries/countries.service';
import { DashboardsCardComponent } from "../../components/molecules/dashboards-card/dashboards-card.component";
import { AvailableCountriesComponent } from '../../components/organisms/available-countries/available-countries.component';

@Component({
  selector: 'app-dashboards',
  standalone: true,
  imports: [
    DashboardsCardComponent,
    AvailableCountriesComponent
],
  templateUrl: './dashboards.component.html',
  styleUrl: './dashboards.component.css'
})
export class DashboardsComponent implements OnInit {

  constructor(
    private countriesService: CountriesService
  ){}

  async ngOnInit(): Promise<void> {
    await this.countriesService.getThreeCountries();
  }

}
