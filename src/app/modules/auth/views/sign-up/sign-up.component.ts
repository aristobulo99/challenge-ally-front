import { Component, OnInit } from '@angular/core';
import { SimpleCardComponent } from '../../../../shared/components/atoms/simple-card/simple-card.component';
import { InputComponent } from '../../../../shared/components/atoms/input/input.component';
import { ButtonComponent } from '../../../../shared/components/atoms/button/button.component';
import { FormControlPipe } from '../../../../shared/pipes/fomr-control.pipe';
import { InputsContent } from '../../../../shared/interfaces/input.interface';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { passwordMatchValidator } from '../../../../shared/utils/form-validator';

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
        placeholder: 'Ej. Juan',
        formControlName: 'name'
      },
      {
        type: 'text',
        label: 'Apellido',
        placeholder: 'Ej. Pérez Gómez',
        formControlName: 'lastName'
      }
    ],
    [
      {
        type: 'email',
        label: 'Correo electrónico',
        placeholder: 'Ej. juan.perez@email.com',
        formControlName: 'email'
      }
    ],
    [
      {
        type: 'password',
        label: 'Contraseña',
        placeholder: 'Mínimo 6 caracteres',
        formControlName: 'password'
      },
      {
        type: 'password',
        label: 'Confirmar contraseña',
        placeholder: 'Vuelve a escribir la contraseña',
        formControlName: 'confirmPassword'
      }
    ]
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
    this.formSignUp = this.fb.group(
      {
        name: new FormControl<string>('', [Validators.required]),
        lastName: new FormControl<string>('', [Validators.required]),
        password: new FormControl<string>('', [Validators.required]),
        confirmPassword: new FormControl<string>('', [Validators.required]),
        email: new FormControl<string>('', [Validators.required, Validators.email]),
      },
      {
        validators: passwordMatchValidator
      }
    )
  }

  async onLogin(): Promise<void>{
    await this.router.navigate(['auht/login'])
  }
}
