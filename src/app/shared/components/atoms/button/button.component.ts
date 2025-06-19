import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  
  @Input() label!: string;
  @Input() typeAttribute: 'flat' | 'stroked' = 'flat';
  @Input() color: 'confirm' | 'error'  = 'confirm'
  @Input() disabled: boolean = false;

  @Output() onClickButton: EventEmitter<void> = new EventEmitter();

  getColorClass(): string {
    return `${this.typeAttribute}-${this.color}`;
  }

  onClick(){
    this.onClickButton.emit();
  }
}
