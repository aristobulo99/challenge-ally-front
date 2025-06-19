import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { getFieldError, isRequired } from '../../../utils/form-erros';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {

  @Input() type: 'text' | 'number' | 'email' = 'text'
  @Input() label!: string;
  @Input() placeholder: string = '';
  @Input() control: FormControl = new FormControl('');

  get isRequiredField(): boolean{
    return isRequired(this.control)
  }

  invalidField() {
    return this.control.errors && this.control.touched;
  }

  fieldError() {
    return getFieldError(this.control);
  }
}
