import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SpinnerComponent } from './shared/components/atoms/spinner/spinner.component';
import { LoadingService } from './shared/services/loading/loading.service';
import { ToastsCardComponent } from './shared/components/molecules/toasts-card/toasts-card.component';
import { ToastsService } from './shared/services/toasts/toasts.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SpinnerComponent,
    ToastsCardComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(
    private loadingService: LoadingService,
    private toastsService: ToastsService
  ){}

  get _loading(): boolean {
    return this.loadingService.loading();
  }

  get _toasts() {
    return this.toastsService.toasts();
  }

}
