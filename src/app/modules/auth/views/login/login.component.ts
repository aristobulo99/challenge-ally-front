import { Component } from '@angular/core';
import { SimpleCardComponent } from '../../../../shared/components/atoms/simple-card/simple-card.component';
import { ButtonComponent } from '../../../../shared/components/atoms/button/button.component';
import { InputComponent } from '../../../../shared/components/atoms/input/input.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    SimpleCardComponent,
    InputComponent,
    ButtonComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
