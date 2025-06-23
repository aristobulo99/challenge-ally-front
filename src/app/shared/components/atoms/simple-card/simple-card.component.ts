import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-simple-card',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './simple-card.component.html',
  styleUrl: './simple-card.component.css'
})
export class SimpleCardComponent {
  @Input() shadows: 'regular' | 'none' = 'none';
}
