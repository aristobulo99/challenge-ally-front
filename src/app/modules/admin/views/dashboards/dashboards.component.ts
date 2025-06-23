import { Component, effect, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries/countries.service';
import { DashboardsCardComponent } from "../../components/molecules/dashboards-card/dashboards-card.component";
import { AvailableCountriesComponent } from '../../components/organisms/available-countries/available-countries.component';
import { Country } from '../../interfaces/countries.interface';
import { LoadingService } from '../../../../shared/services/loading/loading.service';

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

  protected countrie: Country | undefined = undefined;

  constructor(
    private countriesService: CountriesService,
    private loadingService: LoadingService
  ){
    effect(() => {
      this.countrie = this.countriesService.selectionCountrie();
    })
  }

  async ngOnInit(): Promise<void> {
    this.loadingService.setControlLoading(true);
    await this.countriesService.getThreeCountries();
    this.loadingService.setControlLoading(false);
  }

}
