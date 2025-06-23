import { Component, Input } from '@angular/core';
import { SimpleCardComponent } from '../../../../../shared/components/atoms/simple-card/simple-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboards-card',
  standalone: true,
  imports: [
    SimpleCardComponent,
    CommonModule
  ],
  templateUrl: './dashboards-card.component.html',
  styleUrl: './dashboards-card.component.css'
})
export class DashboardsCardComponent {

  @Input({required: true}) title!: string;

}
