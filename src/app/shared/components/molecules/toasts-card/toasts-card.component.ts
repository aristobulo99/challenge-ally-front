import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toasts-card',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './toasts-card.component.html',
  styleUrl: './toasts-card.component.css'
})
export class ToastsCardComponent {

  @Input() title!: string;
  @Input() message!: string;
  @Input() type: 'confirm' | 'warning' | 'error' = 'confirm';
}
