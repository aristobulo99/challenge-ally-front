import { Component, OnInit } from '@angular/core';
import { SimpleCardComponent } from '../../../../shared/components/atoms/simple-card/simple-card.component';
import { InputComponent } from '../../../../shared/components/atoms/input/input.component';
import { ButtonComponent } from '../../../../shared/components/atoms/button/button.component';
import { FormControlPipe } from '../../../../shared/pipes/fomr-control.pipe';
import { InputsContent } from '../../../../shared/interfaces/input.interface';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    SimpleCardComponent,
    InputComponent,
    ButtonComponent,
    FormControlPipe
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent implements OnInit {

  protected inputsFormSignUp: InputsContent[][] = [
    [
      {
        type: 'text',
        label: 'Nombre',
        placeholder: '',
        formControlName: 'name'
      },
      {
        type: 'text',
        label: 'Apellido',
        placeholder: '',
        formControlName: 'lastName'
      }
    ],
    [
      {
        type: 'password',
        label: 'Password',
        placeholder: '',
        formControlName: 'password'
      },
      {
        type: 'password',
        label: 'Confirm Password',
        placeholder: '',
        formControlName: 'confirmPassword'
      }
    ],
    [
      {
        type: 'email',
        label: 'Email',
        placeholder: 'ejemplo@dominio.com',
        formControlName: 'email'
      }
    ],
  ];
  protected formSignUp: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private router: Router
  ){}

  ngOnInit(): void {
    this.initFormSignUp();
  }

  initFormSignUp(): void {
    this.formSignUp = this.fb.group({
      name: new FormControl<string>(''),
      lastName: new FormControl<string>(''),
      password: new FormControl<string>(''),
      confirmPassword: new FormControl<string>(''),
      email: new FormControl<string>(''),
    })
  }

  async onLogin(): Promise<void>{
    await this.router.navigate(['auht/login'])
  }
}
